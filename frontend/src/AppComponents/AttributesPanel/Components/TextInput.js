import React from "react";
import { Input } from "antd";
import styled from "styled-components";

const StyledLabel = styled.label`
  margin: 5px;
`;

const App = (props) => {
  return (
    <div>
      <StyledLabel>{props.label}</StyledLabel>
      <Input
        placeholder="Enter Style"
        onChange={(e) => {
          if (props.onInputChange) props.onInputChange(e.target.value);
        }}
      />
    </div>
  );
};
export default App;
