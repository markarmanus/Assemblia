import { useState } from "react";
import "./App.css";
import { MainContext } from "./Context/MainContext";

import AttributesPanel from "./AppComponents/AttributesPanel/AttributesPanel";

function App() {
  const initialMainContext = {
    selectedComponent: {
      type: undefined,
      id: undefined,
    },
  };
  const [mainContext, setMainContext] = useState(initialMainContext);
  return (
    <MainContext.Provider value={{ mainContext, setMainContext }}>
      <div>
        <div className="App">{/* App.js->return */}</div>;

      </div>
    </MainContext.Provider>
  );
}

export default App;
