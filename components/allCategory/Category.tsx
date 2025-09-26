import ChevronRight from "@/assets/icons/ChevronRight";

export default function Category({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div>
        {title} <ChevronRight />
      </div>
    </div>
  );
}
