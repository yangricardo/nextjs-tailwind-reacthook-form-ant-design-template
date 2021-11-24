import { Input } from 'antd';
import { ReactNode, useMemo } from 'react';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps } from '.';
import { Label } from './label';
import dynamic from 'next/dynamic';

export interface ITextInputProps<TFieldValues extends FieldValues>
  extends IGenericInputProps<TFieldValues> {
  prefix?: ReactNode;
  suffix?: ReactNode;
  type?: 'text' | 'password' | 'mask' | 'text-area';
  mask?: string;
  maxLength?: number;
  minRows?: number;
  maxRows?: number;
  rows?: number;
}

export const TextInput = <TFieldValues extends FieldValues>({
  tooltip,
  name,
  placeholder,
  label,
  allowClear = true,
  type = 'text',
  mask,
  ...rest
}: ITextInputProps<TFieldValues>) => {
  const { control } = useFormContext();
  const AntdMaskedInput = useMemo(
    () =>
      dynamic(() => import('antd-mask-input'), {
        ssr: false,
      }),
    [],
  );
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <Label label={label} tooltip={tooltip}>
          {(() => {
            switch (type) {
              case 'password':
                return (
                  <Input.Password
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    allowClear={allowClear}
                    {...rest}
                  />
                );
              case 'mask':
                return (
                  <AntdMaskedInput
                    name={name}
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    allowClear={allowClear}
                    mask={mask!}
                    {...rest}
                  />
                );
              case 'text-area':
                return (
                  <Input.TextArea
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    allowClear={allowClear}
                    disabled={rest.disabled}
                    defaultValue={rest.defaultValue}
                    maxLength={rest.maxLength}
                    autoSize={{
                      minRows: rest.minRows || 2,
                      maxRows: rest.maxRows || rest.rows,
                    }}
                    rows={rest.rows}
                    showCount
                  />
                );
              default:
                return (
                  <Input
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    allowClear={allowClear}
                    {...rest}
                  />
                );
            }
          })()}
        </Label>
      )}
    />
  );
};
