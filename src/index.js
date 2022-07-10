import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>         {/* We need to import BrowserRouters so that we can use the Routes on App.js */}
        <App />
    </BrowserRouter>
);