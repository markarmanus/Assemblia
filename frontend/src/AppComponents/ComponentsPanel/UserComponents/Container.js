import ClickableWrapper from "./ClickableWrapper";
import COMPONENT_TYPES from "../../../Constants/COMPONENT_TYPES";

export default function Container(props) {
  const content = props.children || "Div";
  return (
    <ClickableWrapper
      onClick={() => {
        if (props.onClick) props.onClick(COMPONENT_TYPES.CONTAINER, content);
      }}
    >
      <div id={props.id}> {content}</div>
    </ClickableWrapper>
  );
}
