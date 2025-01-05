import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function InfiniteScroll({ loadMore }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

  return <div ref={ref} style={{ height: "10px" }}/>;
}

