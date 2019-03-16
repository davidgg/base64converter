import { useState } from 'react';
import { convertFileToBase64, getFileBase64 } from '../../shared/converter';

const useEncoderState = initialValue => {
  const [base64Value, setBase64Value] = useState(initialValue);
  const [fileBase64Value, setFileBase64Value] = useState(initialValue);
  const [errorConversion, setErrorConversion] = useState(null);

  return {
    base64Value,
    setBase64Value,
    fileBase64Value,
    decodeBase64: () => decodeBase64(base64Value, setFileBase64Value),
    encodeFile: event =>
      encodeFile(event.target.files, setBase64Value, setErrorConversion),
    errorConversion
  };
};
export default useEncoderState;

function decodeBase64(base64Value, setFileBase64Value) {
  setFileBase64Value(getFileBase64(base64Value));
}

function encodeFile(file, setBase64Value, setErrorConversion) {
  convertFileToBase64(file)
    .then(setBase64Value)
    .catch(e => encodingError(e, setBase64Value, setErrorConversion));
}

function encodingError(error, setBase64Value, setErrorConversion) {
  const errorMessage = (error && error.message) || 'Error converting';
  setBase64Value(null);
  setErrorConversion(errorMessage);
}
