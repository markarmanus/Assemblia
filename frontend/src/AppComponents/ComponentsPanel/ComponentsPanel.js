import styled from "styled-components";
import Button from "./UserComponents/Button";
import Text from "./UserComponents/Text";
import Container from "./UserComponents/Container";
import "./ComponentsPanel.css"; // Import the CSS file
import axios from "axios";

const RightPanel = styled.div`
  background-color: #161d30;
  color: white;
  width: 25vw;
  border-right: 1px solid #f39f5a;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledText = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  height: 10vh;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  align-items: center;
  justify-content: space-around;
  overflow-y: scroll;
  border-top: 3px solid #f39f5a;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
`;
const TitleStyle = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
`;

function ComponentsPanel() {
  const onAddComponent = async (type, content) => {
    await axios.post("http://localhost:5001/component", {
      componentType: type,
      content,
    });
  };
  return (
    <RightPanel>
      <StyledText>Add Components</StyledText>
      <FlexContainer>
        <ButtonContainer>
          <TitleStyle>Button</TitleStyle>
          <Button id="button" onClick={onAddComponent}>
            Button
          </Button>
        </ButtonContainer>
        <TextContainer>
          <TitleStyle>Label</TitleStyle>
          <Text id="TextStyle" onClick={onAddComponent}>
            Text
          </Text>
        </TextContainer>
        <DivContainer>
          <TitleStyle>Div</TitleStyle>
          <Container id="DivStyle" onClick={onAddComponent}>
            Container
          </Container>
        </DivContainer>
      </FlexContainer>
    </RightPanel>
  );
}

export default ComponentsPanel;
