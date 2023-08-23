import GetBillboard from '@/actions/GetBillboard';
import Billboard from '@/components/Billboard';
import Container from '@/components/ui/Container';

export const revalidate = 0;

export default async function Home() {
  const billboard = await GetBillboard('9210bc12-138c-4f40-a986-19a385cd641d');
  return (
    <Container>
      <main className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </main>
    </Container>
  );
}
