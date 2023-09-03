import type { Size } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);
  return await res.json();
};

export default getSizes;