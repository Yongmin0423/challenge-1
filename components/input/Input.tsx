import React from "react";
import { FieldError } from "react-hook-form";
import cn from "classnames/bind";
import styles from "./Input.module.scss";

const cx = cn.bind(styles);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
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
    <div className={cx("inputWrapper", className)}>
      {label && (
        <label className={cx("label")} htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        placeholder={placeholder}
        className={cx("input", { error: !!error })}
        {...props}
      />
      {error && <span className={cx("errorMessage")}>{error.message}</span>}
      {!error && helperText && (
        <span className={cx("helperText")}>{helperText}</span>
      )}
    </div>
  );
}
