'use client';

import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { type Color, type Size } from '@/types';
import { useSearchParams, useRouter } from 'next/navigation';
import queryString from 'query-string';

interface Props {
  name: string;
  valueKey: string;
  data: Array<Size | Color>;
}

const Filter: React.FC<Props> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = queryString.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id
    };

    if (current[valueKey] === id) {
      // currently active filter
      query[valueKey] = null;
    }

    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query
      },
      { skipNull: true }
    );

    router.push(url, { scroll: false });
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                'rounded-md border border-gray-300 bg-white p-2 text-sm text-gray-800',
                selectedValue === filter.id && 'bg-black text-white'
              )}
              onClick={() => {
                onClick(filter.id);
              }}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
