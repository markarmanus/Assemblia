import { useState } from "react";
import styled from "styled-components";

const StyledColorPicker = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  // border: 1px solid black;
  // border-radius: 10px;
  margin: 0px 5px;
  width: 30px;
  height: 30px;
  // background-color: red;
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  // &::-webkit-color-swatch {
  //   border: none;
  // }
`;

function ColorPicker(props) {
  const [color, setColor] = useState("#5e72e4");

  console.log(color);

  return (
    <StyledColorPicker>
      <label>{props.label}</label>
      <StyledInput type="color" value={color.hex} onChange={(e) => setColor(e.target.value)} />
      <div>{color}</div>
    </StyledColorPicker>
  );
}

export default ColorPicker;
