import styled from "styled-components";

const StyledCard = styled.div`
  margin: auto;
  display: inline-block; /* Allow wrapping if multiple cards */
  padding: 20px;
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Drop shadow */
  background-color: white; /* Background color */
  transition: transform 0.2s, box-shadow 0.2s; /* Smooth animation for hover effect */

  /* 
  &:hover {
    transform: translateY(-10px); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); 
  }*/
`;
const Card = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};
export default Card;
