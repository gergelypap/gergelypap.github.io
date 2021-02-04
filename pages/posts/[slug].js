import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function Post({ content, meta }) {
  return (
    <article>
      <h1>{meta.title}</h1>
      <p>{meta.created}</p>
      <ReactMarkdown children={content} />
    </article>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", params.slug + ".md"))
    .toString();

  const { data: meta, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: "numeric", month: "long", day: "numeric" };
  meta.created = new Date(meta.created).toLocaleDateString("en-US", options);

  return {
    props: {
      meta,
      content,
    },
  };
}
