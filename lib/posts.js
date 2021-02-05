import fs from "fs";
import path from "path";
import matter from "gray-matter";
import getPostFilenames, { postsDirectory } from "./getPostFilenames";
import convertDate from "./date";

export default function getPosts() {
  // Get file names under /posts
  const filenames = getPostFilenames();
  const posts = filenames.map((filename) => {
    // Remove ".md" from file name to get id
    const slug = filename.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Convert date
    data.created = convertDate(data.created);

    // Combine the data with the id
    return {
      slug,
      meta: data,
      content,
    };
  });

  // Sort posts by date
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
