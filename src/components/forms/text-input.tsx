import { Input } from 'antd';
import { ReactNode } from 'react';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps } from '.';
import { Label } from './label';
export interface ITextInputProps<
  TFieldValues extends FieldValues,
  ValueType = any,
> extends IGenericInputProps<TFieldValues> {
  disabled?: boolean;
  loading?: boolean;
  allowClear?: boolean;
  defaultValue?: ValueType;
  filterOption?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export const TextInput = <TFieldValues extends FieldValues>({
  name,
  placeholder,
  label,
  prefix,
  suffix,
}: ITextInputProps<TFieldValues>) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <Label label={label}>
          <Input
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
          />
        </Label>
      )}
    />
  );
};
