import React from "react";
import ClickableWrapper from "./ClickableWrapper";
import COMPONENT_TYPES from "../../../Constants/COMPONENT_TYPES";
export default function Text(props) {
  const content = props.children || "Text";

  return (
    <ClickableWrapper
      onClick={() => {
        if (props.onClick) props.onClick(COMPONENT_TYPES.TEXT, content);
      }}
    >
      <p id={props.id}>{content}</p>
    </ClickableWrapper>
  );
}
