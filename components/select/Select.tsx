import { createContext, useContext, ReactNode, useState } from "react";
import cn from "classnames/bind";
import styles from "./Select.module.scss";
import ChevronDown from "@/assets/icons/ChevronDown";

const cx = cn.bind(styles);

// Context
interface SelectContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  disabled?: boolean;
  error?: { message?: string };
}

const SelectContext = createContext<SelectContextValue | null>(null);

const useSelect = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error(
      "Select 관련 컴포넌트는 Select 컴포넌트 내에서 사용되어야 합니다."
    );
  }
  return context;
};

// Select (Root)
interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
  disabled?: boolean;
  error?: { message?: string };
}

export function Select({
  value,
  onValueChange,
  children,
  disabled,
  error,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectContext.Provider
      value={{
        value,
        onValueChange,
        isOpen,
        setIsOpen,
        disabled,
        error,
      }}
    >
      <div style={{ position: "relative", width: "100%" }}>
        {children}
        {error && <span className={cx("errorMessage")}>{error.message}</span>}
      </div>
    </SelectContext.Provider>
  );
}

// SelectTrigger
interface SelectTriggerProps {
  children: ReactNode;
}

export function SelectTrigger({ children }: SelectTriggerProps) {
  const { isOpen, setIsOpen, disabled, error } = useSelect();

  return (
    <button
      type="button"
      disabled={disabled}
      className={cx("select", { error: !!error })}
      onClick={() => !disabled && setIsOpen(!isOpen)}
    >
      {children}
      <span>
        <ChevronDown />
      </span>
    </button>
  );
}

// SelectContent
interface SelectContentProps {
  children: ReactNode;
}

export function SelectContent({ children }: SelectContentProps) {
  const { isOpen } = useSelect();

  if (!isOpen) return null;

  return <div className={cx("selectContent")}>{children}</div>;
}

// SelectItem
interface SelectItemProps {
  value: string;
  children: ReactNode;
}

export function SelectItem({ value, children }: SelectItemProps) {
  const {
    value: selectedValue,
    onValueChange,
    setIsOpen,
    disabled,
  } = useSelect();

  const isSelected = selectedValue === value;

  const handleClick = () => {
    if (disabled) return;
    onValueChange?.(value);
    setIsOpen(false);
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={cx("selectItem", { selected: isSelected })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

// SelectValue
interface SelectValueProps {
  placeholder?: string;
  children?: ReactNode;
}

export function SelectValue({
  placeholder = "선택해주세요",
  children,
}: SelectValueProps) {
  const { value } = useSelect();

  return <span>{children || value || placeholder}</span>;
}

// SelectLabel
interface SelectLabelProps {
  children: ReactNode;
  htmlFor?: string;
}

export function SelectLabel({ children, htmlFor }: SelectLabelProps) {
  return (
    <label className={cx("label")} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
