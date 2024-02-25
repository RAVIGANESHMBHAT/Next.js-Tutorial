"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks: Array<{ name: string; href: string }> = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgo Password",
    href: "/forgot-password",
  },
];

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  return (
    <div>
      {navLinks.map(({ name, href }) => {
        const isActive = pathName.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {name}
          </Link>
        );
      })}

      {children}
    </div>
  );
}

export default AuthLayout;
