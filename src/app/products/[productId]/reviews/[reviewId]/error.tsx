"use client";

import React from "react";

function ErrorBoundary({ error }: { error: Error }) {
  return <div className="bg-red-400 p-4">{error.message}</div>;
}

export default ErrorBoundary;
