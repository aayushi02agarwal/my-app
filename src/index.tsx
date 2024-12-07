import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Portfolio from './porfolio/index';

// interface Root {
//   render(element: React.ReactElement): void;
//   unmount(): void;
// }

// // Extend the 'react-dom' module with the createRoot function
// declare module 'react-dom' {
//   function createRoot(container: Element): Root;
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <App/>
//   </StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root')
);
