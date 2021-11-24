import { Switch } from 'antd';
import { ReactNode } from 'react';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps } from '.';
import { Label } from './label';
export interface ISwitchInputProps<TFieldValues extends FieldValues>
  extends IGenericInputProps<TFieldValues> {
  disabled?: boolean;
  defaultChecked?: boolean;
  loading?: boolean;
  checkedChildren?: ReactNode;
  unCheckedChildren?: ReactNode;
}

export const SwitchInput = <TFieldValues extends FieldValues>({
  tooltip,
  name,
  label,
  disabled,
  defaultChecked,
  checkedChildren,
  unCheckedChildren,
  loading,
}: ISwitchInputProps<TFieldValues>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Label label={label} tooltip={tooltip}>
          <Switch
            onChange={onChange}
            checkedChildren={checkedChildren}
            unCheckedChildren={unCheckedChildren}
            defaultChecked={defaultChecked}
            checked={value}
            disabled={disabled}
            loading={loading}
          />
        </Label>
      )}
    />
  );
};
