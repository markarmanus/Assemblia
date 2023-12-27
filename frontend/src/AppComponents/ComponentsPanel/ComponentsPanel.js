import styled from "styled-components";
import Button from "./UserComponents/Button";
import Text from "./UserComponents/Text";
import Container from "./UserComponents/Container";

const RightPanel = styled.div`
  background-color: #161d30;
  color: white;
  width: 25vw;
  padding: 10px;
  overflow-y: scroll;
  border-right: 2px solid red; /* Added right border */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledText = styled.div`
  font-size: 24px;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  height: 10vh;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10;
  width: 100%;
  height: 85vh;
  align-items: center;
  justify-content: space-around;
`;

function ComponentsPanel() {
  return (
    <RightPanel>
      <StyledText>Components Panel</StyledText>
      <FlexContainer>
        <Button />
        <Text />
        <Container />
      </FlexContainer>
    </RightPanel>
  );
}

export default ComponentsPanel;
