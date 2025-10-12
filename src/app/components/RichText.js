import { PortableText } from "@portabletext/react";
import Link from "next/link";

const components = {
  block: {
    h2: ({ children }) => <h2 className="mt-6 text-xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-4 text-lg font-semibold">{children}</h3>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-gray-200">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-rose-800/60 pl-4 italic text-gray-200">
        {children}
      </blockquote>
    ),
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
    underline: ({ children }) => <span className="underline">{children}</span>,

    // Alignment marks (separate from heading/body/quote)
    center: ({ children }) => (
      <span className="block text-center">{children}</span>
    ),
    alignRight: ({ children }) => (
      <span className="block text-right">{children}</span>
    ),

    // Editorial scale marks (not headings)
    lead: ({ children }) => (
      <span className="block text-lg leading-relaxed text-gray-100">{children}</span>
    ),
    small: ({ children }) => (
      <span className="block text-xs leading-snug text-gray-300">{children}</span>
    ),

    // Links
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
        <Link
          href={href}
          className="underline decoration-rose-800/70 underline-offset-4 hover:text-rose-300"
        >
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
