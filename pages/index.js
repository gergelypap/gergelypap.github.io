import { getPosts } from "lib/posts";
import Post from "components/Post";
import Layout from "components/Layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <section>
        {posts.map((post) => (
          <Post
            key={post.slug}
            slug={post.slug}
            title={post.title}
            intro={post.intro}
            created={post.created}
            isPreview={true}
          />
        ))}
      </section>
    </Layout>
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
