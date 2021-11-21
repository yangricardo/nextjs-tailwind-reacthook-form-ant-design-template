import { Input } from 'antd';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps } from '.';
import { Label } from './label';

export const PasswordInput = <TFieldValues extends FieldValues>({
  tooltip,
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
        <Label label={label} tooltip={tooltip}>
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
