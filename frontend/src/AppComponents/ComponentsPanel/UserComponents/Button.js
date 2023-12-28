import React from "react";
import ClickableWrapper from "./ClickableWrapper";
import "../ComponentsPanel.css"; // Import the CSS file
import COMPONENT_TYPES from "../../../Constants/COMPONENT_TYPES";

export default function Button(props) {
  const content = props.children || "Button";
  return (
    <ClickableWrapper onClick={() => props.onClick(COMPONENT_TYPES.BUTTON, content)}>
      <button id="button">{content}</button>
    </ClickableWrapper>
  );
}
