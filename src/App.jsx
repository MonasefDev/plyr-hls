import React, { useRef } from 'react';

import PlyrHLSComponent from './PlyrHLSComponent';

// This imports the functional component from the previous sample.

const App = ({ sources }) => {
  const source =
    'https://eno.dokicloud.one/_v10/ef34957d0bd1728462acbbaadd234c67241e33f83c6f9cd3f6d3e1081c3b0512b26d3d82c570236c2feb1cb6e59b4f53563ea5ec6266f1a2a8f6b58d7e79fa5aa54a6cf6412268cf70ed9d940264a48181dca4dce23ea287848137bd36238856bf99e09174d3bf3afa7168fc89ee29c28f11dc3df7da18620b3aecd2af46fa2e244b680f3c85fbe5c7aa675c9d7bf397/360/index.m3u8';
  const subtitle =
    'https://cc.2cdns.com/1e/c7/1ec7d1ae7734fa9554d6fa363347500b/ara-4.vtt';

  return (
    <div>
      <PlyrHLSComponent source={source} subtitle={subtitle} />
    </div>
  );
};

export default App;
