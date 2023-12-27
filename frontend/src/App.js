import { useState } from "react";
import "./App.css";
import { MainContext } from "./Context/MainContext";

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
      <div className="App">{/* App.js->return */}</div>;
    </MainContext.Provider>
  );
}

export default App;
