import styled from "@emotion/styled";
import React from "react";

const ButtonStyle = styled.button`
  border: 0;
  color: #fff;
  background-color: ${props => props.color};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: ${props => props.color};
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
// 초기값 설정...
const Button = ({ label, onClick, color = "#ff5722" }) => {
  return (
    <ButtonStyle onClick={onClick} color={color}>
      {label}
    </ButtonStyle>
  );
};

export default Button;
