import { useState } from "react";
import { useForm } from "react-hook-form";
import { Product } from "@/data/products";

type OrderFormData = {
  title: string;
  quantity: number | null;
  file: File | null;
  options: Record<string, string>;
};

export function useOrderForm(product: Product) {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useForm<OrderFormData>({
    defaultValues: {
      title: "",
      quantity: null,
      file: null,
      options: {},
    },
    mode: "onChange",
  });

  const quantity = watch("quantity");
  const uploadedFile = watch("file");

  // 선택값 state 관리
  const [optionSelections, setOptionSelections] = useState<
    Record<string, number>
  >({});
  const [selectedOptionValues, setSelectedOptionValues] = useState<
    Record<string, string>
  >({});

  // 수량 변경 핸들러
  const handleQuantityChange = (value: string) => {
    const selected = product.quantities?.find((q) => q.label === value);
    if (selected) {
      setValue("quantity", selected.value, { shouldValidate: true });
    }
  };

  // 옵션 변경 핸들러
  const handleOptionChange = (
    optionLabel: string,
    itemName: string,
    itemPrice: number
  ) => {
    setOptionSelections((prev) => ({
      ...prev,
      [optionLabel]: itemPrice,
    }));
    setSelectedOptionValues((prev) => ({
      ...prev,
      [optionLabel]: itemName,
    }));
  };

  // 파일 업로드 핸들러
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("file", file, { shouldValidate: true });
    }
  };

  // 파일 업로드 버튼 클릭 핸들러
  const handleUploadButtonClick = () => {
    document.getElementById("file-input")?.click();
  };

  const handleFileRemove = () => {
    setValue("file", null, { shouldValidate: true });
    // input 요소도 초기화
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  // 주문 제출 핸들러
  const onSubmit = (data: OrderFormData) => {
    console.log("주문 데이터:", data);
  };

  // 장바구니 추가 핸들러
  const handleAddToCart = async () => {
    const isValid = await trigger();
    if (isValid) {
      console.log("장바구니 추가");
    }
  };

  return {
    control,
    errors,
    handleSubmit,
    quantity,
    uploadedFile,
    optionSelections,
    selectedOptionValues,
    handleQuantityChange,
    handleOptionChange,
    handleFileUpload,
    handleFileRemove,
    handleUploadButtonClick,
    handleAddToCart,
    onSubmit,
  };
}
