import React from "react";
import { TextFieldProps, TextInputProps } from "@/app/types";
import { useController } from "react-hook-form";
import { cn } from "@/utils/cn";
import { Profile } from "@/app/schema";

const TextInput = ({
  className = "",
  placeholder = "",
  ...props
}: TextInputProps) => (
  <input className={className} placeholder={placeholder} {...props} />
);

const TextField = ({ name, control, label, placeholder }: TextFieldProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: name as keyof Profile,
    control,
  });

  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <TextInput
        id={name}
        {...field}
        type='text'
        className={cn(
          "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          error ? "border-red-500" : "border-gray-300"
        )}
        aria-describedby={label}
        placeholder={placeholder}
      />
      <div id={`${name}-error`} className='h-4 text-red-500 text-sm'>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default TextField;
