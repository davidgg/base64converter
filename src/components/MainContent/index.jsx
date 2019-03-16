import React from 'react';

import Encoder from './Encoder';
import './index.scss';

const MainContent = () => (
  <div className="MainContent">
    <h1>Base64 Converter</h1>
    <p>Select a file or fill the textarea to convert to/from base64</p>
    <Encoder />
  </div>
);

export default MainContent;
