import styled from "styled-components";
import { useState, useEffect } from "react";

const EditPanelContainer = styled.div`
  background-color: #232d48;
  width: 50vw;
  display: flex;
  flex-direction: column;
`;
const LabelContainer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-bottom: 1px solid #f39f5a;
`;
const CanvasContainer = styled.div`
  width: 100%;
  height: 95vh;
  padding: 10px;
`;
const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f39f5a;
  margin-left: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    transform: scale(1.1);
  }

  /* Style for the clicked button */
  &:focus,
  &:active {
    z-index: 2;
    color: black;
  }

  /* Style when not active */
  &:not(:focus):not(:active) {
    color: white;
  }
`;

function EditorPanel() {
  const [activeScreen, setActiveScreen] = useState("Editor");

  useEffect(() => {
    setActiveScreen("Editor");
  }, []);

  const handleClick = (screen) => {
    setActiveScreen(screen);
  };

  return (
    <EditPanelContainer>
      <LabelContainer>
        <StyledButton
          onClick={() => handleClick("Editor")}
          style={{ color: activeScreen === "Editor" ? "black" : "white" }}
        >
          Editor
        </StyledButton>
        <StyledButton
          onClick={() => handleClick("Code")}
          style={{ color: activeScreen === "Code" ? "black" : "white" }}
        >
          Code
        </StyledButton>
      </LabelContainer>
      <CanvasContainer>
        {activeScreen === "Editor" && <div>Editor Screen</div>}
        {activeScreen === "Code" && <div>Code Screen</div>}
      </CanvasContainer>
    </EditPanelContainer>
  );
}

export default EditorPanel;
