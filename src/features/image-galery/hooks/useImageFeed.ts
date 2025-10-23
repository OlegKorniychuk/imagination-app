import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchImages } from '../api';

export const useImageFeed = () => {
  return useInfiniteQuery({
    queryKey: ['images', 'feed'],
    queryFn: fetchImages,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
  });
};
