import { getPosts } from "lib/posts";
import Post from "components/Post";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
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
