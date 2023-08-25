import GetProduct from '@/actions/GetProduct';
import GetProducts from '@/actions/GetProducts';
import Info from '@/components/Info';
import ProductList from '@/components/ProductList';
import Gallery from '@/components/gallery/Index';
import Container from '@/components/ui/Container';

interface Props {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<Props> = async ({ params }) => {
  const product = await GetProduct(params.productId);
  const suggestedProducts = await GetProducts({
    categoryId: product?.category?.id
  });

  return (
    <main className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </main>
  );
};

export default ProductPage;
