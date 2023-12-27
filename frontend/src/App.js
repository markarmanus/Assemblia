import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { MainContext } from "./Context/MainContext";
import ComponentsPanel from "./AppComponents/ComponentsPanel/ComponentsPanel";
import AttributesPanel from "./AppComponents/AttributesPanel/AttributesPanel";

const MainPage = styled.div`
  height: 100vh;
  display: flex;
`;

const EditPanel = styled.div`
  background-color: #fff;
  width: 64vw;
  overflow-y: scroll;
  2 &::-webkit-scrollbar {
    display: none;
  }
`;

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
      <MainPage>
        <ComponentsPanel />
        <EditPanel>
          <div id={0} className="App">
            {/* App.js->return->div->0->content */}
          </div>
          Main Component Area
        </EditPanel>
        <AttributesPanel />
      </MainPage>
    </MainContext.Provider>
  );
}

export default App;
