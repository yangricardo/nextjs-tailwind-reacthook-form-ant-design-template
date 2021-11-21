import { Checkbox } from 'antd';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps } from '.';
import { Label } from './label';
export interface ICheckBoxInputProps<TFieldValues extends FieldValues>
  extends IGenericInputProps<TFieldValues> {
  disabled?: boolean;
}

export const CheckInput = <TFieldValues extends FieldValues>({
  tooltip,
  name,
  label,
  disabled,
}: ICheckBoxInputProps<TFieldValues>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Label label={label} tooltip={tooltip}>
          <Checkbox onChange={onChange} value={value} disabled={disabled} />
        </Label>
      )}
    />
  );
};
