"use client";

import { useEffect } from "react";

interface ViewTrackerProps {
  slug: string;
  postId?: number;
}

export function ViewTracker({ slug, postId }: ViewTrackerProps) {
  useEffect(() => {
    // Increment view count on WordPress
    // Post Views Counter plugin typically tracks views automatically via REST API
    // or you can make a custom endpoint call here
    const incrementView = async () => {
      try {
        // Post Views Counter might expose an endpoint like this:
        // Or it might auto-track when the post is fetched via REST API
        await fetch(
          `https://ghostwhite-starling-589299.hostingersite.com/wp-json/post-views-counter/view-post/${slug}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).catch(() => {
          // Fail silently if endpoint doesn't exist
        });
      } catch (error) {
        // Fail silently
      }
    };

    incrementView();
  }, [slug, postId]);

  return null;
}
