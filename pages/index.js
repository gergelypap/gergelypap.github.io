import Head from "next/head";
// import fs from "fs";
import * as matter from "gray-matter";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>@gpap</title>
      </Head>

      {posts.map((post) => (
        <article key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <a>
              <h1>{post.title} </h1>
            </a>
          </Link>
          <p>{post.created}</p>
          <p>{post.description}</p>
        </article>
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data: meta } = matter(fileContents);

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    const options = { year: "numeric", month: "long", day: "numeric" };
    meta.created = new Date(meta.created).toLocaleDateString("en-US", options);

    return {
      ...meta,
      slug: filename.replace(".md", ""),
    };
  });
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: await Promise.all(posts),
    },
  };
}
