import React from 'react';

import PlyrHLSComponent from './PlyrHLSComponent';

// This imports the functional component from the previous sample.

const App = ({ sources }) => {
  const source =
    'https://xex.stluserehtem.com/_v10/e87f231b367d9120fce53210c6d4d7e55a7a54764ca17a4b83ba8d354c8220d8953ba39d5a7662d491056ecb24e31a1a23f4e78ea5d6509da4265afff940c5e95ba23657fc4930446412a8215d3db8f66bc6903855bdc844bcebb764a0fa68a75fe57a372e3939ca4fd096a00951a80932a801ccd8399f62009e47a21ff5dce732943c9499fa0d71b75370179e4775e0/playlist.m3u8';
  const subtitle =
    'https://cc.2cdns.com/8e/2e/8e2e53f5bbdd648e86228c0e2bfae4f6/eng-2.vtt';

  return (
    <div>
      <PlyrHLSComponent source={source} subtitle={subtitle} />
    </div>
  );
};

export default App;
