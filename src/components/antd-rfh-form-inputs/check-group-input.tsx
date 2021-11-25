import { Checkbox } from 'antd';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps } from '.';
import { Label } from './label';

export interface ICheckGroupOption {
  label: string;
  value: any;
  disabled?: boolean;
  inderterminate?: boolean;
}

export interface ICheckInputProps<TFieldValues extends FieldValues>
  extends IGenericInputProps<TFieldValues> {
  options: ICheckGroupOption[];
  disabled?: boolean;
}

export const CheckGroupInput = <TFieldValues extends FieldValues>({
  tooltip,
  name,
  label,
  options,
  disabled,
}: ICheckInputProps<TFieldValues>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Label name={name} label={label} tooltip={tooltip}>
          <Checkbox.Group
            onChange={onChange}
            value={value}
            disabled={disabled}
            options={options}
          />
        </Label>
      )}
    />
  );
};
