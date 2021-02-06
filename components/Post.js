import Link from "next/link";

export default function Post({
  content,
  created,
  intro,
  slug,
  title,
  isPreview = false,
}) {
  // console.log(content);
  return (
    <article>
      <h1>
        {isPreview ? (
          <Link href={`/posts/${slug}`}>
            <a>{title}</a>
          </Link>
        ) : (
          title
        )}
      </h1>
      <time>{created}</time>
      <p>{intro}</p>
      {!isPreview && <div dangerouslySetInnerHTML={{ __html: content }} />}
      {!isPreview && (
        <Link href="/">
          <a>← Back</a>
        </Link>
      )}
    </article>
  );
}
