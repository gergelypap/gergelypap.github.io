export default function PostDate({ dateString }) {
  const date = new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return <time dateTime={dateString}>{date}</time>;
}
