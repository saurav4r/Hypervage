import React, { useEffect } from "react";
import * as ReactDOMClient from "react-dom/client";
import "../styles/global.css";
import Hyper from "./components/Hyper";
import back from "./image/back.jpeg";

const App: React.FC<{}> = () => {

  const backgroundImageStyle = {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover', // This will cover the entire component
    backgroundPosition: 'center', // This will center the image
    backgroundAttachment: 'fixed', // This will make the background image stick
    height: '100vh', // Set the height of the component
    width: '100%', // Set the width of the component
    overflow: 'auto', // Ensure content can overflow
  };

  return (
    <div style={backgroundImageStyle}>
      <div>
        <Hyper />
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
