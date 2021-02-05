import fs from "fs";
import path from "path";
import matter from "gray-matter";
import getPostFilenames from "lib/getPostFilenames";
import Post from "components/Post";
import convertDate from "lib/date";

export default function PostPage({ slug, meta, content }) {
  return <Post slug={slug} content={content} meta={meta} />;
}

export async function getStaticPaths() {
  const filenames = getPostFilenames();
  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", params.slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);
  data.created = convertDate(data.created);

  return {
    props: {
      slug: params.slug,
      meta: data,
      content,
    },
  };
}
