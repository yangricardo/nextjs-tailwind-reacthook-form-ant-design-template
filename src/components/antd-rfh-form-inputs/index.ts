import {
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form';

export interface IGenericInputProps<TFieldValues extends FieldValues = any> {
  name: Path<TFieldValues>;
  placeholder?: string;
  label: string;
  tooltip?: string;
  disabled?: boolean;
  allowClear?: boolean;
  defaultValue?: RHFGenericValueType;
}

export type RHFGenericValueType<TFieldValues extends FieldValues = any> = PathValue<TFieldValues, Path<TFieldValues>>;

export type ValueType = string | number;
