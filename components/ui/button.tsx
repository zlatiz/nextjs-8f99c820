"use client";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md";
  id?: string;
};

export default function Button({ children, href = "#", variant = "primary", size = "md", id }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium rounded-md whitespace-nowrap";
  const sizes: Record<string, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-base"
  };
  const variants: Record<string, string> = {
    primary: "btn-primary",
    outline: "btn-outline"
  };

  const className = `${base} ${sizes[size]} ${variants[variant]}`;

  return (
    <a id={id} href={href} className={className} role="button">
      {children}
    </a>
  );
}
