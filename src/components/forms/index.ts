import {
  FieldValues,
  Path,
  PathValue,
  UnpackNestedValue,
} from 'react-hook-form';
export interface IGenericInputProps<TFieldValues extends FieldValues = any> {
  name: Path<TFieldValues>;
  placeholder?: string;
  label: string;
  tooltip?: string;
}

export type RHFGenericValueType<TFieldValues extends FieldValues = any> =
  UnpackNestedValue<PathValue<TFieldValues, Path<TFieldValues>>>;

export type ValueType = string | number;
