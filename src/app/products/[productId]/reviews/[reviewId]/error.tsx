"use client";

import React from "react";

function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="bg-red-400 p-4">
      {error.message} <button onClick={reset}>Try again</button>
    </div>
  );
}

export default ErrorBoundary;
