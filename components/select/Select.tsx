import React from "react";
import { FieldError } from "react-hook-form";
import cn from "classnames/bind";
import styles from "./Select.module.scss";

const cx = cn.bind(styles);

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: FieldError;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
  ref?: React.Ref<HTMLSelectElement>;
}

export default function Select({
  label,
  error,
  helperText,
  className,
  options,
  placeholder,
  ref,
  ...props
}: SelectProps) {
  return (
    <div className={cx("selectWrapper", className)}>
      {label && (
        <label className={cx("label")} htmlFor={props.id}>
          {label}
        </label>
      )}
      <select ref={ref} className={cx("select", { error: !!error })} {...props}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={cx("errorMessage")}>{error.message}</span>}
      {!error && helperText && (
        <span className={cx("helperText")}>{helperText}</span>
      )}
    </div>
  );
}
