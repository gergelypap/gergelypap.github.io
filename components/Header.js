import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6">
      <figure>
        <img
          className="h-auto	w-32 h-32 rounded-full mx-auto"
          src="https://placekitten.com/200/200"
          alt=""
          width="200"
          height="200"
        />
        <div className="pt-6 text-center space-y-4">
          <h1 className="text-xxl font-semibold">@gpap</h1>
          <p className="text-gray-500 font-semibold">Web developer</p>
        </div>
      </figure>

      <nav className="text-center p-6">
        <Link href="/">
          <a>Posts</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
}
