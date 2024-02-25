import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // To handle error in any layout, the error component has to be put inside layout's parent
  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }

  return (
    <>
      {children}
      <h3>Featured Products</h3>
    </>
  );
}

export default ProductDetailsLayout;
