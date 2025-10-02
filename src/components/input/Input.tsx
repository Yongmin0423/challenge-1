import React from "react";
import { FieldError } from "react-hook-form";
import cn from "classnames/bind";
import styles from "./Input.module.scss";

const cx = cn.bind(styles);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | { message?: string };
  placeholder?: string;
  helperText?: string;
  ref?: React.Ref<HTMLInputElement>;
}

export default function Input({
  label,
  error,
  helperText,
  className,
  placeholder,
  ref,
  ...props
}: InputProps) {
  return (
    <div className={cx("InputWrapper", className)}>
      {label && (
        <label className={cx("Label")} htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        placeholder={placeholder}
        className={cx("Input", { Error: !!error })}
        {...props}
      />
      {error && <span className={cx("ErrorMessage")}>{error.message}</span>}
      {!error && helperText && (
        <span className={cx("HelperText")}>{helperText}</span>
      )}
    </div>
  );
}
