import React, { useState } from "react";
import ClickableWrapper from "./ClickableWrapper";
import styled from "styled-components";

const TextWithSymbols = styled.p`
  color: #f39f5a;
  font-size: 20px;
  font-weight: bold;
  display: flex; /* Use flexbox to center text */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  height: 100%;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #e67e22;
    cursor: pointer;
  }
`;

export default function Text({ children }) {
  const [isClicked, setIsClicked] = useState(true);

  const textWithSymbols = "&lt; Text &gt;";

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <ClickableWrapper>
      {isClicked ? (
        <TextWithSymbols onClick={handleClick} dangerouslySetInnerHTML={{ __html: textWithSymbols }} />
      ) : (
        <TextWithSymbols onClick={handleClick}>{children}</TextWithSymbols>
      )}
    </ClickableWrapper>
  );
}
