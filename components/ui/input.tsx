"use client";
import React from "react";

type InputProps = {
  id: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export default function Input({ id, name, placeholder = "", value, onChange, type = "text" }: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-border rounded-md px-3 py-2"
    />
  );
}
