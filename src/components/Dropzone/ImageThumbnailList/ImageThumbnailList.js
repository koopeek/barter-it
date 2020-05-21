import React from 'react';
import PropTypes from 'prop-types';
import './ImageThumbnailList.scss';
import { ImageThumbnail } from './ImageThumbnail/ImageThumbnail';

const ImageThumbnailList = ({ files, handleRemoveFile }) => {
  return (
    <div className="images-thumbnails">
      <div className="images-thumbnails__list" data-testid="images-thumbnails">
        {files.map((file, key) => (
          <ImageThumbnail key={key} file={file} handleRemoveFile={handleRemoveFile} />
        ))}
      </div>
    </div>
  );
};

ImageThumbnailList.propTypes = {
  files: PropTypes.array.isRequired,
  handleRemoveFile: PropTypes.func.isRequired
};

export { ImageThumbnailList };
