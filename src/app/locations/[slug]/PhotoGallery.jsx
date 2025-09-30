"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PhotoGallery({ slug, name }) {
  // Try up to 6 numbered photos: <slug>1.jpg ... <slug>6.jpg
  const candidates = Array.from({ length: 6 }, (_, i) => `/images/locations/${slug}${i + 1}.jpg`);
  const [existing, setExisting] = useState([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const results = await Promise.allSettled(
        candidates.map(async (url) => {
          const res = await fetch(url, { method: "HEAD" });
          return res.ok ? url : null;
        })
      );
      const found = results.map(r => (r.status === "fulfilled" ? r.value : null)).filter(Boolean);
      if (!cancelled) setExisting(found);
    })();
    return () => { cancelled = true; };
  }, [slug]);

  if (!existing.length) return null;

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {existing.map((src, i) => (
        <div key={src} className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={src}
            alt={`${name} photo ${i + 1}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}
