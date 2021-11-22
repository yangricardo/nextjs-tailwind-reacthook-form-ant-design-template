import { Checkbox } from 'antd';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps, RHFGenericValueType } from '.';
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
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value } }) => (
        <Label label={label} tooltip={tooltip}>
          <Checkbox
            onChange={value =>
              setValue(name, value.target.checked as RHFGenericValueType)
            }
            checked={value}
            disabled={disabled}
          />
        </Label>
      )}
    />
  );
};
