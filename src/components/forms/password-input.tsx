import { Input } from 'antd';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps } from '.';
import { Label } from './label';

export const PasswordInput = <TFieldValues extends FieldValues>({
  name,
  placeholder,
  label,
}: IGenericInputProps<TFieldValues>) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <Label label={label}>
          <Input.Password
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        </Label>
      )}
    />
  );
};
