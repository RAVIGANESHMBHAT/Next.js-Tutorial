"use client";

import React from "react";
import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();

  const handlePlaceOrder = () => {
    console.log("Placing your order...");
    router.push("/"); // we also have replace, back, forward
  };

  return (
    <>
      <div>Order Product</div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </>
  );
}

export default OrderProduct;
