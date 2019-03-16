import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const FileInput = ({ onFileChange }) => (
  <div className="FileInput">
    <div className="custom-file">
      <input
        type="file"
        className="custom-file-input"
        id="customFile"
        onChange={onFileChange}
      />
      <label className="custom-file-label" htmlFor="customFile">
        Choose file
      </label>
    </div>
  </div>
);

FileInput.propTypes = {
  onFileChange: PropTypes.func
};

export default FileInput;
