import React, { useMemo, useState } from "react";
import { ColorPicker, Space } from "antd";
import styled from "styled-components";

const StyledColorPicker = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  margin: 5px;
`;

const CPicker = (props) => {
  const [colorHex, setColorHex] = useState("#1677ff");
  const [formatHex, setFormatHex] = useState("hex");
  const hexString = useMemo(() => {
    const hex = typeof colorHex === "string" ? colorHex : colorHex.toHexString();
    if (props.onColorChange && hex) props.onColorChange(hex);
    return hex;
  }, [colorHex]);

  return (
    <StyledColorPicker>
      <StyledLabel>{props.label}</StyledLabel>
      <Space>
        <ColorPicker format={formatHex} value={colorHex} onChangeComplete={setColorHex} onFormatChange={setFormatHex} />
        <span>HEX: {hexString}</span>
      </Space>
    </StyledColorPicker>
  );
};

export default CPicker;
