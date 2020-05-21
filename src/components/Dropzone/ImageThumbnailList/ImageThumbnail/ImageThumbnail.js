import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ImageThumbnail.scss';

const ImageThumbnail = ({ file, handleRemoveFile }) => {
  const [filePreview, setFilePreview] = useState(null);

  const reader = new FileReader();

  reader.onloadend = () => {
    setFilePreview(reader.result);
  };

  reader.readAsDataURL(file);

  return (
    filePreview && (
      <div className="image-thumbnail">
        <img src={filePreview} alt="thumbnail" className="image-thumbnail__image" />
        <div className="image-thumbnail__button">
          <button
            type="button"
            className="image-thumbnail__button__remove"
            onClick={() => handleRemoveFile(file)}
          >
            X
          </button>
        </div>
      </div>
    )
  );
};

ImageThumbnail.propTypes = {
  file: PropTypes.object.isRequired,
  handleRemoveFile: PropTypes.func.isRequired
};

export { ImageThumbnail };
