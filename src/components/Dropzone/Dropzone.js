import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './Dropzone.scss';

const Dropzone = ({ input }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    acceptedFiles => {
      const newFiles = [...files, ...acceptedFiles];
      setFiles(newFiles);
      input.onChange(newFiles);
    },
    [input, files]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <p className="dropzone__info">Przeciągnij i upuść tutaj, lub kliknij aby wybrać pliki</p>
    </div>
  );
};

export { Dropzone };
