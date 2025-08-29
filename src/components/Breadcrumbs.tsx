"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center gap-2 px-8 sm:px-0 mb-4 text-sm text-gray-400">
      <Link href="/" className="hover:text-rose-300">
        Home
      </Link>
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        const name = segment.charAt(0).toUpperCase() + segment.slice(1);

        return (
          <div key={href} className="flex items-center gap-2">
            <FaChevronRight size={10} />
            {isLast ? (
              <span className="font-semibold text-white">This Page 👇</span>
            ) : (
              <Link href={href} className="hover:text-rose-300">
                {name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
