import ClickableWrapper from "./ClickableWrapper";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 100%; /* Ensure TextContainer takes the full height */
`;

const TitleStyle = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

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

export default function Text() {
  const textWithSymbols = "&lt; Text &gt;";
  return (
    <ClickableWrapper>
      <TextContainer>
        <TitleStyle>Label</TitleStyle>
        <TextWithSymbols dangerouslySetInnerHTML={{ __html: textWithSymbols }} />
      </TextContainer>
    </ClickableWrapper>
  );
}
