import React from "react";

function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <h3>Featured Products</h3>
    </>
  );
}

export default ProductDetailsLayout;
