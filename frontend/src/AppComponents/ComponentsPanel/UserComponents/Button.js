import React from "react";
import ClickableWrapper from "./ClickableWrapper";
import "../ComponentsPanel.css"; // Import the CSS file

export default function Button({ title }) {
  return (
    <ClickableWrapper>
      <button id="button">{title}</button>
    </ClickableWrapper>
  );
}
