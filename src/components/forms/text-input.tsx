import { Input } from 'antd';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps } from '.';

export const TextInput = <TFieldValues extends FieldValues>({
  name,
  placeholder,
}: IGenericInputProps<TFieldValues>) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <Input
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      )}
    />
  );
};
