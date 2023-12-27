import React from "react";

function ClickableWrapper(props) {
  function handleClick(event) {
    const elementType = event.target.tagName.toLowerCase();
    console.log(`Clicked: ${elementType}`);
  }

  return <div onClick={handleClick}>{props.children}</div>;
}

export default ClickableWrapper;
