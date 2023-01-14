
// import React from "react"                   // from tutorial this dont work because it is for the old version
// import ReactDom from "react-dom/client"


// import App from "./App"
// ReactDom.createRoot(<App/>, document.getElementById("root"))

import React from 'react';                   
import ReactDOM from 'react-dom/client';
import App from "./App"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

