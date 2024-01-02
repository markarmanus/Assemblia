import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { MainContext } from "./Context/MainContext";
import AttributesPanel from "./AppComponents/AttributesPanel/AttributesPanel";
import ComponentsPanel from "./AppComponents/ComponentsPanel/ComponentsPanel";
import EditorPanelContainer from "./AppComponents/EditorPanelContainer/EditorPanelContainer";
import EditPanel from "./ServerComponents/EditPanel";
/* App.js->import */

const MainPage = styled.div`
  height: 100vh;
  display: flex;
`;

function App() {
  const [activeScreen, setActiveScreen] = useState("Editor");

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
        <EditorPanelContainer setActiveScreen={setActiveScreen} activeScreen={activeScreen}>
          <div id={0} className="App">
            <EditPanel id={"C2"}>{/* App.js->return->EditPanel->C2->content */}</EditPanel>
            {/* App.js->return->div->0->content */}
          </div>
        </EditorPanelContainer>
        <AttributesPanel />
      </MainPage>
    </MainContext.Provider>
  );
}

export default App;
