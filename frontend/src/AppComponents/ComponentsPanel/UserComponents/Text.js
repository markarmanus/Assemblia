import ClickableWrapper from "./ClickableWrapper";
import styled from "styled-components";

const TextWithSymbols = styled.span`
  color: #f39f5a;
  font-size: 20px;
  font-weight: bold;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #e67e22;
    cursor: pointer;
  }
`;

export default function Text() {
  const textWithSymbols = "&lt; Text Section &gt;";
  return (
    <ClickableWrapper>
      <TextWithSymbols dangerouslySetInnerHTML={{ __html: textWithSymbols }} />
    </ClickableWrapper>
  );
}
