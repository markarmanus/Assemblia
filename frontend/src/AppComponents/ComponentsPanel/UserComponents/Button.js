import React from "react";
import ClickableWrapper from "./ClickableWrapper";
import COMPONENT_TYPES from "../../../Constants/COMPONENT_TYPES";

export default function Button(props) {
  const content = props.children || "Button";
  return (
    <ClickableWrapper
      onClick={() => {
        if (props.onClick) props.onClick(COMPONENT_TYPES.BUTTON, content);
      }}
    >
      <button id={props.id}>{content}</button>
    </ClickableWrapper>
  );
}
