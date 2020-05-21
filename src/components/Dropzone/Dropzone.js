import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { ImageThumbnailList } from './ImageThumbnailList/ImageThumbnailList';
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

  const handleRemoveFile = removedFile => {
    if (removedFile) {
      const filesWithoutRemoved = files.filter(file => file !== removedFile);
      setFiles(filesWithoutRemoved);
    }
  };

  return (
    <>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p className="dropzone__info">Przeciągnij i upuść tutaj, lub kliknij aby wybrać pliki</p>
      </div>
      <ImageThumbnailList files={files} handleRemoveFile={handleRemoveFile} />
    </>
  );
};

export { Dropzone };
