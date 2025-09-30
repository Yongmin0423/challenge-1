import DetailPage from "@/views/detail/DetailPage";
import { getProductById } from "@/data/products";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id: productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  return <DetailPage product={product} productId={productId} />;
}
