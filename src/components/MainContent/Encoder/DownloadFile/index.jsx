import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const DownloadFile = ({ fileBase64Value }) => (
  <>
    {fileBase64Value ? (
      <div className="DownloadFile">
        <a
          href={fileBase64Value}
          className="btn btn-primary file-download"
          disabled={fileBase64Value == null}
          download
        >
          Download
        </a>
      </div>
    ) : (
      ''
    )}
  </>
);

DownloadFile.propTypes = {
  fileBase64Value: PropTypes.string
};

export default DownloadFile;
