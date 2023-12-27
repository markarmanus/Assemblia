import styled from "styled-components";
import CSS_PROPS from "../../Constants/CSS_PROPS";
import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import INPUT_TYPES from "../../Constants/INPUT_TYPES";

const StyledAttributesPanel = styled.div`
  background-color: #ddd;
  width: 18vw;
  border-left: 2px solid #888;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const PanelTitle = styled.div`
  font-size: 20px;
  text-align: center;
  border-bottom: 2px solid #888;
  padding: 10px;
`;
const AttributesList = styled.div`
  background-color: red;
  height: 100%

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const PanelButtons = styled.div`
  font-size: 20px;
  border-top: 2px solid #888;
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
  return (
    <StyledAttributesPanel>
      <PanelTitle>Attribute Panel</PanelTitle>
      <AttributesList>All the shit</AttributesList>
      <PanelButtons>
        <DeleteButton onClick={() => console.log("Component Deleted")}>Delete</DeleteButton>
        <ExportButton onClick={() => console.log("Component Exported")}> Export</ExportButton>
      </PanelButtons>
    </StyledAttributesPanel>
  );
}

export default AttributesPanel;
