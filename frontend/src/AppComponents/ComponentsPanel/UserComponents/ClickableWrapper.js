function ClickableWrapper(props) {
  function handleClick() {
    console.log("clicked");
  }

  return <div onClick={handleClick}>{props.children}</div>;
}

export default ClickableWrapper;
