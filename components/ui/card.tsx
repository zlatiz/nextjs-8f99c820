import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  href?: string;
};

export default function Card({ title, children, imageSrc, imageAlt, href = "#" }: CardProps) {
  const safeSrc = imageSrc;
  return (
    <article className="card rounded-lg border border-border p-4 bg-surface">
      <div className="rounded-md overflow-hidden mb-3" style={{ backgroundColor: '#f3f3f3' }}>
        <div className="w-full aspect-[4/3] relative">
          <Image src={safeSrc} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 400px" unoptimized />
        </div>
      </div>
      <div className="card-content flex-1">
        <h3 className="card-title">{title}</h3>
        <p className="mt-2 text-sm text-muted">{children}</p>
      </div>
      <div className="mt-4">
        <a href={href} className="nav-link inline-block">View</a>
      </div>
    </article>
  );
}
