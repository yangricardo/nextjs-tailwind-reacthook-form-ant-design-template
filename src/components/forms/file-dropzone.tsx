import {
  useDropzone,
  FileWithPath,
  FileRejection,
  DropEvent,
} from 'react-dropzone';
import { useFormContext } from 'react-hook-form';

export interface IFileDropzone {
  name: string;
}

export const FileDropzone = ({ name }: IFileDropzone) => {
  const RHForm = useFormContext();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: (
      acceptedFiles: FileWithPath[],
      _fileRejections: FileRejection[],
      _event: DropEvent,
    ) => {
      console.log('FileDropzone', acceptedFiles);
      RHForm.setValue(name, acceptedFiles);
    },
  });

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone border-2' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
};
