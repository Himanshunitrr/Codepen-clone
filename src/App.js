import React, { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  return (
    <div>
      <div className="pane top-pane">
        <Editor 
        language="xml" 
        displayName="HTML" 
        value={html} 
        onChange={setHtml} />
        <Editor 
        language="javascript" 
        displayName="JS" 
        value={js} 
        onChange={setJs} />
        <Editor 
        language="css" 
        displayName="CSS" 
        value={css} 
        onChange={setCss} />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          src=""
          frameborder="0"
        />
      </div>
    </div>
  );
}

export default App;
