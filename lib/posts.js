import fs from "fs";
import path from "path";
import matter from "gray-matter";
import convertDate from "./date";
import remark from "remark";
import html from "remark-html";

export const postsDirectory = path.join(process.cwd(), "posts");

const metadataSchema = {
  title: true,
  intro: true,
  created: true,
  updated: false,
};

function validate(metadata, filename) {
  for (const [key] of Object.entries(metadataSchema)) {
    if (metadata[key] === undefined && metadataSchema[key])
      throw Error(`Missing metadata '${key}' in ${postsDirectory}/${filename}`);
  }
}

export function getPostFilenames() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => {
    return {
      params: {
        slug: file.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPosts() {
  // Get file names under /posts
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((file) => {
    // Remove ".md" from file name to get id
    const slug = file.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);
    validate(data, file);

    // Convert date
    data.created = convertDate(data.created);

    // Combine the data with the id
    return {
      slug,
      ...data,
    };
  });

  // Sort posts by date
  return posts.sort((a, b) => (a.date < b.date ? -1 : 1));
}

export async function getPost(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  let { data, content } = matter(fileContents);
  data.created = convertDate(data.created);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(content);
  content = processedContent.toString();

  // Combine the data with the slug
  return {
    slug,
    content,
    ...data,
  };
}
