import {
  FieldValues,
  Path,
  PathValue,
  UnpackNestedValue,
} from 'react-hook-form';
export interface IGenericInputProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  placeholder?: string;
  label: string;
}

export type RHFGenericValueType<TFieldValues extends FieldValues> =
  UnpackNestedValue<PathValue<TFieldValues, Path<TFieldValues>>>;
