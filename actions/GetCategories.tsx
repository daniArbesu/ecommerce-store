import type { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/categories`;

const GetCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  return await res.json();
};

export default GetCategories;
