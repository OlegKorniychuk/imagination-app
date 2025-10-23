import React, { useEffect } from 'react';
import { useImageFeed } from '../hooks/useImageFeed';
import { useInView } from 'react-intersection-observer';

export function ImageGrid() {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useImageFeed();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <div>Loading images...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.data.map((image) => (
              <div
                key={image.id}
                className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div ref={ref} className="h-10">
        {isFetchingNextPage && <div>Loading more...</div>}
      </div>
    </div>
  );
}
