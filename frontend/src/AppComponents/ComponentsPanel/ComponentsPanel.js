import styled from "styled-components";
import Button from "./UserComponents/Button";
import Text from "./UserComponents/Text";
import Container from "./UserComponents/Container";

const RightPanel = styled.div`
  background-color: #161d30;
  color: white;
  width: 25vw;
  border-right: 3px solid #f39f5a; /* Added right border */
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

function ComponentsPanel() {
  return (
    <RightPanel>
      <StyledText>Add Components</StyledText>
      <FlexContainer>
        <Button />
        <Text />
        <Container />
      </FlexContainer>
    </RightPanel>
  );
}

export default ComponentsPanel;
