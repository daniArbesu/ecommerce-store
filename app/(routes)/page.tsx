import GetBillboard from '@/actions/GetBillboard';
import GetProducts from '@/actions/GetProducts';
import Billboard from '@/components/Billboard';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';

export const revalidate = 0;

export default async function Home() {
  const products = await GetProducts({ isFeatured: true });
  const billboard = await GetBillboard('9210bc12-138c-4f40-a986-19a385cd641d');
  return (
    <Container>
      <main className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <section className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </section>
      </main>
    </Container>
  );
}
