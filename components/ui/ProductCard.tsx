'use client';
import type { Product } from '@/types';
import Image from 'next/image';

interface Props {
  data: Product;
}

const ProductCard: React.FC<Props> = ({ data }) => {
  return (
    <article className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          alt="Product Image"
          fill
          className="aspect-square object-cover rounded-md"
        />
      </div>
      <div className="opacity-0 group-hover:opacity-100">
        <div className="flex gap-x-6 justify-center"></div>
      </div>
    </article>
  );
};

export default ProductCard;
