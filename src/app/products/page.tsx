import Link from "next/link";
import React from "react";

function ProductList() {
  const productId = 100;

  return (
    <>
      <Link href="/">Home</Link>
      <h3>Product List</h3>
      <ul>
        <li>
          <Link href="products/1">Product 1</Link>
        </li>
        <li>
          <Link href="products/2">Product 2</Link>
        </li>
        <li>
          <Link href="products/3" replace>
            Product 3
          </Link>
        </li>
        <li>
          <Link href={`products/${productId}`}>Product {productId}</Link>
        </li>
      </ul>
    </>
  );
}

export default ProductList;
