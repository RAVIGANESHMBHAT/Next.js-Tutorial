import Link from "next/link";
import React from "react";

function F1() {
  return (
    <>
      <div>F1 Page</div>
      <div>
        <Link href="/f1/f2">F2</Link>
      </div>
    </>
  );
}

export default F1;
