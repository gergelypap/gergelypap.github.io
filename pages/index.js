import Head from "next/head";
import getPosts from "lib/posts";
import Post from "components/Post";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>@gpap's blog</title>
      </Head>

      {posts.map((post) => (
        <Post
          key={post.slug}
          slug={post.slug}
          content={post.content}
          meta={post.meta}
          isPreview={true}
        />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
}
