import Input from "@/components/input/Input";
import Select from "@/components/select/Select";

export default function DetailPage() {
  return (
    <div>
      <form>
        <Input label="제작물 제목" />
        <Select
          label="테스트"
          options={[{ value: "option1", label: "옵션1" }]}
        />
      </form>
    </div>
  );
}
