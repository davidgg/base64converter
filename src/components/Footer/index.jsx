import React from 'react';

import './index.scss';

const Footer = () => (
  <footer className="Footer">
    © {new Date().getFullYear()}{' '}
    <a href="https://davidgg.es" title="David GG page">
      David GG
    </a>{' '}
    All Rights Reserved.{' '}
  </footer>
);

export default Footer;
