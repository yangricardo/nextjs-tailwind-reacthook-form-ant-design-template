import { Button } from 'antd';
import {
  FieldValues,
  Path,
  useFieldArray,
  useFormContext,
} from 'react-hook-form';
import {
  FieldArrayInputRender,
  IFieldArrayInputRender,
} from './field-array-input-render';
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai';
export interface IFieldArrayForm<
  TFormValues extends FieldValues = any,
  TFieldArrayValues extends FieldValues = any,
> {
  prefixName: Path<TFormValues>;
  inputs: IFieldArrayInputRender<TFieldArrayValues>[];
  maxItems?: number;
  minItems?: number;
}

export const FieldArrayInput = <
  TFormValues extends FieldValues = any,
  TFieldArrayValues extends FieldValues = any,
>({
  prefixName,
  inputs,
  minItems = 1,
  maxItems,
}: IFieldArrayForm<TFormValues, TFieldArrayValues>) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: prefixName,
  });

  return (
    <div className="w-full flex flex-col">
      {fields.map((item, index) => {
        const fieldItemKey = `${prefixName}-${index}-${item.id}`;
        const inputLengh = (inputs.length > 3 && 3) || inputs.length;
        const wrapperGridCols = `grid-cols-${inputLengh + 1}`;
        const inputGridColsSpan = `col-span-${inputLengh}`;
        const inputGridCols = `grid-cols-${inputLengh}`;
        return (
          <div
            key={fieldItemKey}
            className={`w-full grid ${wrapperGridCols} gap-4`}
          >
            <div
              className={`${inputGridColsSpan} grid grid-cols-1 md:${inputGridCols} gap-4`}
            >
              {inputs.map(({ name, ...componentRenderProps }, inputIndex) => {
                const fieldItemInputKey = `${fieldItemKey}-${name}-${inputIndex}`;
                const inputName = `${prefixName}.${index}.${name}`;
                return (
                  <FieldArrayInputRender
                    key={fieldItemInputKey}
                    name={inputName}
                    {...componentRenderProps}
                  />
                );
              })}
            </div>
            <div className="w-full flex space-x-2 col-span-1 p-7">
              <Button
                shape="circle"
                onClick={() => remove(index)}
                disabled={fields.length === minItems}
                className="deleteIconButton"
              >
                <AiFillDelete className="w-5 h-5" />
              </Button>
              <Button
                shape="circle"
                className="addIconButton"
                onClick={() => append({

                } as any)}
                disabled={fields.length === maxItems}
              >
                <AiOutlinePlus className="w-5 h-5" />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
