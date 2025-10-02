import DetailLayout from "@/layouts/detailLayout/DetailLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DetailLayout>{children}</DetailLayout>;
}