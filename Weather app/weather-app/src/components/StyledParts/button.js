import styled from "styled-components";

// Styled Button
const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  /* Hover Effect */
  &:hover {
    background-color: #0056b3;
  }

  /* Active Effect */
  &:active {
    transform: scale(0.95);
  }

  /* Disabled State */
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

// Button Component
const Button = ({ children, onClick, disabled, variant = "primary" }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;