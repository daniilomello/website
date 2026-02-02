"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Filter out "blog" segment since blog is now the homepage
  // This prevents showing "Home > Blog > Post" and showing "Home > Post" instead
  const displaySegments = segments.filter(segment => segment !== "blog");

  // Don't show breadcrumbs if we're on the homepage
  if (displaySegments.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center gap-2 px-8 sm:px-0 mb-4 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-foreground">
        Home
      </Link>
      {displaySegments.map((segment, index) => {
        // Reconstruct the full path including "blog" for href, but don't display "blog"
        const originalIndex = segments.indexOf(segment);
        const href = `/${segments.slice(0, originalIndex + 1).join("/")}`;
        const isLast = index === displaySegments.length - 1;
        const name = segment.charAt(0).toUpperCase() + segment.slice(1);

        return (
          <div key={href} className="flex items-center gap-2">
            <FaChevronRight size={10} />
            {isLast ? (
              <span className="font-semibold text-foreground">This Page 👇</span>
            ) : (
                <Link href={href} className="hover:text-foreground/20">
                {name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
