import FormItem from 'antd/lib/form/FormItem';
import { FC } from 'react';

interface ILabel {
  label: string;
  tooltip?: string;
}

export const Label: FC<ILabel> = ({ children, label, tooltip }) => (
  <FormItem label={`${label}`} tooltip={tooltip} className="w-full">
    {children}
  </FormItem>
);
