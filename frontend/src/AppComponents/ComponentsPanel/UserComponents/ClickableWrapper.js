import React from "react";

function ClickableWrapper(props) {
  function handleClick() {
    if (props.onClick) props.onClick();
  }

  return <div onClick={handleClick}>{props.children}</div>;
}

export default ClickableWrapper;
