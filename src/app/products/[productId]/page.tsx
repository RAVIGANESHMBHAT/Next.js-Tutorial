import { Metadata } from "next";
import React from "react";

type Props = { params: { productId: string } };

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`iPhone ${params.productId}`), 100);
  });
  return {
    title: `Product ${title}`,
  };
};

function ProductDetails({ params }: Props) {
  return <div>Details about product {params.productId}</div>;
}

export default ProductDetails;
