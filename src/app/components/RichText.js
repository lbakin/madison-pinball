
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const components = {
  block: {
    h2: ({ children }) => <h2 className="mt-6 text-xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-4 text-lg font-semibold">{children}</h3>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-gray-200">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-4 list-disc pl-6">{children}</ul>,
    number: ({ children }) => <ol className="mb-4 list-decimal pl-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = value?.blank || /^https?:\/\//i.test(href);
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-rose-800/70 underline-offset-4 hover:text-rose-300"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className="underline decoration-rose-800/70 underline-offset-4 hover:text-rose-300">
          {children}
        </Link>
      );
    },
  },
};

export default function RichText({ value }) {
  if (!value?.length) return null;
  return <PortableText value={value} components={components} />;
}
