import ClickableWrapper from "./ClickableWrapper";
import styled from "styled-components";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleStyle = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
const ContainerStyle = styled.div`
  background-color: #f39f5a;
  color: black;
  width: 18vw;
  height: 15vh;
  padding: 10px;
  border: 1px solid #f39f5a;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #e67e22;
    cursor: pointer;
  }
`;

export default function Container() {
  return (
    <ClickableWrapper>
      <DivContainer>
        <TitleStyle>Div</TitleStyle>
        <ContainerStyle> Container </ContainerStyle>
      </DivContainer>
    </ClickableWrapper>
  );
}
