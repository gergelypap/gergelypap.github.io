import Link from "next/link";
import RawHtml from "./RawHtml";
import PostDate from "./PostDate";

export default function Post({
  content,
  created,
  intro,
  slug,
  title,
  isPreview = false,
}) {
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
      <small>
        <PostDate dateString={created} />
      </small>
      <p>{intro}</p>
      {!isPreview && <RawHtml html={content} />}
      {!isPreview && (
        <Link href="/">
          <a>← Back</a>
        </Link>
      )}
    </article>
  );
}
