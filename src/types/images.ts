export type ImageResponseDto = {
  id: string;
  authorId: string;
  title: string;
  description: string | null;
  tags: string[];
  isPublic: boolean;
  url: string;
  createdAt: Date;
  updatedAt: Date;
};
