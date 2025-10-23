import type { ImageResponseDto } from '@/types/images';
import type { PaginatedResponse } from '@/types/paginatedResponse';
import axios from 'axios';

export type ImageSortOptions = {
  field: 'title' | 'createdAt' | 'updatedAt';
  order: 'asc' | 'desc';
};

export type ImageFilterOptions = {
  title?: string;
  author?: string;
  tags?: string[];
};

export type ImagePaginateOptions = {
  pageSize: number;
  page: number;
};

export type ImageSearchOptions = {
  sort?: ImageSortOptions;
  filter?: ImageFilterOptions;
  paginate?: ImagePaginateOptions;
};

export const fetchImages = async ({
  pageParam = 1,
}): Promise<PaginatedResponse<ImageResponseDto>> => {
  const response = await axios.get<PaginatedResponse<ImageResponseDto>>(
    'http://localhost:3000/api/v1/images',
    { params: { paginate: { page: pageParam, pageSize: 8 } } }
  );

  return response.data;
};
