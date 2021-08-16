import React from 'react';
import ReactDOM from 'react-dom';
// import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './view/styles/styles.css';
import './view/styles/base.scss';
import { SampleContextProvider } from './context/SampleContext';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
    <SampleContextProvider>
      <App />
    </SampleContextProvider>
    {/* </ChakraProvider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
