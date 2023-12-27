import { useState } from "react";
import styled from 'styled-components'
import "./App.css";
import { MainContext } from "./Context/MainContext";

import AttributesPanel from "./AppComponents/AttributesPanel/AttributesPanel";

const MainPage = styled.div`
  height: 100vh;
  display: flex;
`
const RightPanel = styled.div`
  background-color: #0000aa;
  width: 18vw;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const EditPanel = styled.div`
  background-color: #fff;
  width: 64vw;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

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
        <RightPanel>
          Components Panel
        </RightPanel>
        <EditPanel>
          <div className="App">{/* App.js->return */}</div>
          Main Component Area
        </EditPanel>
        <AttributesPanel />
      </MainPage>
    </MainContext.Provider>
  );
}

export default App;
