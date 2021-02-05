import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function Post({ slug, meta, content, isPreview = false }) {
  return (
    <article>
      <h1>
        {isPreview ? (
          <Link href={`/posts/${slug}`}>
            <a>{meta.title}</a>
          </Link>
        ) : (
          meta.title
        )}
      </h1>
      <time>{meta.created}</time>
      <p>{meta.intro}</p>
      {!isPreview && <ReactMarkdown children={content} />}
      {!isPreview && (
        <Link href="/">
          <a>← Back</a>
        </Link>
      )}
    </article>
  );
}
