import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Welcome home</h2>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
}
