import { getPost, getPostFilenames } from "lib/posts";
import Post from "components/Post";
import Head from "next/head";
import Layout from "components/Layout";

export default function PostPage({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Post
        key={post.slug}
        slug={post.slug}
        title={post.title}
        intro={post.intro}
        created={post.created}
        content={post.content}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostFilenames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  return {
    props: {
      post,
    },
  };
}
