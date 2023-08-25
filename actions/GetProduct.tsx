import type { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/products`;

const GetProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);
  return await res.json();
};

export default GetProduct;
