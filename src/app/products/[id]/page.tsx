import { prisma } from '@/lib/db/prisma';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import PriceTag from '@/components/PriceTag';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params: { id } }: ProductPageProps) {
  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) notFound();

  return (
    <div className="flex flex-col lg:flex-row">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority></Image>

      <div>
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <PriceTag price={}></PriceTag>
      </div>
    </div>
  );
}
