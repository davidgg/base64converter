import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const EncodedView = ({ base64Value, onBase64Change }) => (
  <div className="EncodedView">
    <textarea
      className="encoded-value"
      placeholder="Insert here your base64 data"
      value={base64Value}
      onChange={e => onBase64Change(e.target.value)}
    />
  </div>
);

EncodedView.propTypes = {
  base64Value: PropTypes.string,
  onBase64Change: PropTypes.func
};

export default EncodedView;
