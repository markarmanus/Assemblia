import styled from "styled-components";
import CSS_PROPS from "../../Constants/CSS_PROPS";
import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import INPUT_TYPES from "../../Constants/INPUT_TYPES";

import ColorPicker from "./Components/ColorPicker";

const StyledAttributesPanel = styled.div`
  color: white;
  background-color: #161d30;
  width: 25vw;
  border-left: 2px solid #f39f5a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const PanelTitle = styled.div`
  font-size: 24px;
  text-align: center;
  border-bottom: 3px solid #f39f5a;
  padding: 10px;
`;
const AttributesList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const PanelButtons = styled.div`
  font-size: 20px;
  border-top: 3px solid #f39f5a;
  padding: 15px;

  display: flex;
  justify-content: space-evenly;
`;
const DeleteButton = styled.button`
  font-size: 18px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  transition-duration: 0.2s;

  &:hover {
    background-color: #990000;
    color: white;
  }

  &:active {
    background-color: #aa0000;
    transform: translateY(2px);
  }
`;
const ExportButton = styled.button`
  font-size: 18px;
  background-color: #0000cc;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  transition-duration: 0.2s;

  &:hover {
    background-color: #000099;
    color: white;
  }

  &:active {
    background-color: #0000aa;
    transform: translateY(2px);
  }
`;

function AttributesPanel() {
  // const { type, id } = mainContext.selectedComponent;
  // const cssProps = CSS_PROPS[type]; // => { backgroundColor: { type: "", data: {}}  }
  // Object.entries(cssProps).forEach(([cssProp, cssPropData]) => {
  //   // for each css prop we render on the screen ability to change that css property input
  //   // switch (cssPropData.type) {
  //   //   case INPUT_TYPES.COLOR_PICKER:
  //   //     return;
  //   // }
  // });

  // const mainContext = useContext(MainContext);
  // if (mainContext.selectedComponent.type === undefined || mainContext.selectedComponent.id) return;

  return (
    <StyledAttributesPanel>
      <PanelTitle>Attribute Panel</PanelTitle>
      <AttributesList>
        <ColorPicker label={"Hello World!"} />
      </AttributesList>
      <PanelButtons>
        <DeleteButton onClick={() => console.log("Component Deleted")}>Delete</DeleteButton>
        <ExportButton onClick={() => console.log("Component Exported")}> Export</ExportButton>
      </PanelButtons>
    </StyledAttributesPanel>
  );
}

export default AttributesPanel;
