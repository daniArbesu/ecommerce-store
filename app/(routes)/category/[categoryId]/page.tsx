import GetProducts from '@/actions/GetProducts';
import getCategory from '@/actions/getCategory';
import getColors from '@/actions/getColors';
import getSizes from '@/actions/getSizes';
import Billboard from '@/components/Billboard';
import Container from '@/components/ui/Container';
import Filter from './components/Filter';
import NoResults from '@/components/ui/NoResults';
import ProductCard from '@/components/ui/ProductCard';
import MobileFilters from './components/MobileFilters';

export const revalidate = 0;

interface Props {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<Props> = async ({ params, searchParams }) => {
  const { categoryId } = params;
  const { colorId, sizeId } = searchParams;

  const products = await GetProducts({
    categoryId,
    colorId,
    sizeId
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);

  return (
    <main className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </div>
          <section className="mt-6 lg:col-span-4 lg:mt-0">
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
          </section>
        </section>
      </Container>
    </main>
  );
};

export default CategoryPage;
