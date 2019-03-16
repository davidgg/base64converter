import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const ImageView = ({ fileBase64Value }) => (
  <div className="ImageView">
    <p>If the base64 value is a valid image, it will be shown below</p>

    {fileBase64Value ? (
      <div
        className="image-base64"
        style={{
          backgroundImage: `url('${fileBase64Value}')`
        }}
      />
    ) : (
      ''
    )}
  </div>
);

ImageView.propTypes = {
  fileBase64Value: PropTypes.string
};

export default ImageView;
