import type { Product } from '@/types';
import queryString from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const GetProducts = async (query: Query): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured
    }
  });

  const res = await fetch(url);
  return await res.json();
};

export default GetProducts;
