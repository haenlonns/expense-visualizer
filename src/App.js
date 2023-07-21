import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

import authorize from "./apiInteractions/authorize";

import URLForm from "./components/sheetsHandler/URLForm";

function App() {

  const [firstRun, setFirstRun] = useState(true);
  if (firstRun) {
    let authClient = authorize();
  }

  return (
    <div className="App">
      <div>
        <URLForm />
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
