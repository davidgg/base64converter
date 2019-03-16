import React from 'react';

import EncodedView from './EncodedView';
import FileInput from './FileInput';
import useEncoderState from './useEncoderState';

import './index.scss';
import DownloadFile from './DownloadFile';
import ImageView from './ImageView';

const Encoder = () => {
  const {
    base64Value,
    setBase64Value,
    fileBase64Value,
    decodeBase64,
    encodeFile,
    errorConversion
  } = useEncoderState('');

  return (
    <div className="Encoder">
      <div className="encoder-file">
        <FileInput
          fileBase64Value={fileBase64Value}
          onFileChange={encodeFile}
        />
      </div>
      {errorConversion ? <h2>Error: {errorConversion}</h2> : ''}

      <EncodedView base64Value={base64Value} onBase64Change={setBase64Value} />
      <button
        className="btn btn-primary encoder-download"
        onClick={decodeBase64}
      >
        View/Download File
      </button>

      <ImageView fileBase64Value={fileBase64Value} />
      <DownloadFile fileBase64Value={fileBase64Value} />
    </div>
  );
};

export default Encoder;
