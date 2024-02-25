import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Welcome home</h2>
      <Link href="/blog" className="text-blue-500 mr-4">
        Blog
      </Link>
      <Link href="/products" className="text-blue-500">
        Products
      </Link>
    </>
  );
}
