import React from "react";

function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div>Featured Products</div>
    </>
  );
}

export default ProductDetailsLayout;
