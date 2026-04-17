import { useEffect, useRef } from "preact/hooks";

export function InfiniteScroll({ loadMore }: { loadMore: () => void }) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef(loadMore);
  loadMoreRef.current = loadMore;

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) loadMoreRef.current();
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={sentinelRef} style={{ height: "10px" }}/>;
}
