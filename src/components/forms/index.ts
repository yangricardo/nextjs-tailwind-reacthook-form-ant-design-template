import { FieldValues, Path } from 'react-hook-form';

export interface IGenericInputProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  placeholder?: string;
  label: string;
}
