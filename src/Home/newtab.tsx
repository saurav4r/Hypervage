import React, { useEffect } from "react";
import * as ReactDOMClient from "react-dom/client";
import "../styles/global.css";
import Hyper from "./components/Hyper";

const App: React.FC<{}> = () => {
  return (
   
      <div className="bg-[#F4F2EE] text-base">
        <div>
            <Hyper/>
        </div>
      </div>
    
  );
};

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

// Use the new createRoot API for React 18
const root = ReactDOMClient.createRoot(rootElement);

root.render(
 
    <App />
   
);