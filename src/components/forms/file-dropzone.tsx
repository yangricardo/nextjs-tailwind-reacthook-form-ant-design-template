import { Spin } from 'antd';
import { useState } from 'react';
import {
  useDropzone,
  FileWithPath,
  FileRejection,
  DropEvent,
} from 'react-dropzone';
import { FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps, RHFGenericValueType } from '.';
import { Label } from './label';

interface IFileDropzone<TFieldValues extends FieldValues>
  extends IGenericInputProps<TFieldValues> {
  multiple?: boolean;
  disabled?: boolean | undefined;
  maxFiles?: number | undefined;
  maxSize?: number | undefined;
  minSize?: number | undefined;
  afterAccept?: (acceptedFiles: FileWithPath[]) => void;
}

export const FileDropzone = <TFieldValues extends FieldValues>({
  tooltip,
  name,
  label,
  maxFiles,
  maxSize,
  minSize,
  multiple = false,
  disabled = false,
  afterAccept,
}: IFileDropzone<TFieldValues>) => {
  const RHForm = useFormContext<TFieldValues>();
  const [loading, setLoading] = useState(false);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple,
    maxFiles,
    maxSize,
    minSize,
    disabled,
    onDrop: (
      acceptedFiles: FileWithPath[],
      _fileRejections: FileRejection[],
      _event: DropEvent,
    ) => {
      console.log('FileDropzone', acceptedFiles);
      setLoading(true);
      RHForm.setValue(name, acceptedFiles as RHFGenericValueType<TFieldValues>);
      afterAccept && afterAccept(acceptedFiles);
      setLoading(false);
    },
  });

  return (
    <Label label={label} tooltip={tooltip}>
      <div
        {...getRootProps({
          className: `
            w-full pt-4 rounded-lg flex flex-col justify-center items-center content-center cursor-pointer
            border-2 border-dashed
            text-gray-400 transition duration-400

            ${loading && 'cursor-wait'}
            ${
              (disabled && 'cursor-not-allowed') ||
              'hover:border-blue-300 hover:text-blue-500'
            }
          `,
        })}
      >
        <input {...getInputProps()} />
        {(loading && <Spin tip="Loading..." />) || (
          <>
            <p className="text-lg">
              {`${
                (!isDragActive && 'Clique ou arraste') || 'Solte'
              } o arquivo aqui`}
            </p>
          </>
        )}
      </div>
    </Label>
  );
};
