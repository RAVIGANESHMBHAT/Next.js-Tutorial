import React from "react";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <h1>Page not found</h1>
      <p>Could not find requested resource.</p>
    </div>
  );
}

export default NotFound;
