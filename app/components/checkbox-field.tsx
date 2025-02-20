import { FC } from "react";
import { useController } from "react-hook-form";
import { CheckboxInputProps } from "@/app/types";
import { Profile } from "@/app/schema";

const CheckboxField: FC<CheckboxInputProps> = ({
  id,
  label,
  control,
  name,
}) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name: name as keyof Profile,
    control,
  });

  return (
    <div className='flex items-center mb-4'>
      <input
        id={id}
        name={id}
        type='checkbox'
        className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
        aria-checked={value as boolean}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
      <label htmlFor={id} className='ml-2 block text-sm text-gray-700'>
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
