import styled from "styled-components";

const RightPanel = styled.div`
  background-color: #161d30;
  color: white;
  width: 18vw;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
function ComponentsPanel() {
  return <RightPanel>Components Panel</RightPanel>;
}

export default ComponentsPanel;
