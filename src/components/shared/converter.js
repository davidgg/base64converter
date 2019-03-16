export function convertFileToBase64(fileList) {
  if (!fileList || !fileList.length || !fileList[0].size) {
    return Promise.reject('Not valid file');
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = e => reject('Error converting');
    reader.readAsDataURL(fileList[0]);
  });
}

export function getFileBase64(base64Value) {
  const value = base64Value || '';
  const isDataAvailable = value.trim().match(/^data:.+\/(.+);base64,/, '');

  return isDataAvailable
    ? value
    : `data:application/octet-stream;base64,${value.trim()}`;
}
