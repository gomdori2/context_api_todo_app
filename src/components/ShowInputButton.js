import React from "react";
import Button from "./Button";
import styled from "@emotion/styled";

const WrapStyle = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 999;
`;

const ShowInputButton = ({ show, onClick }) => {
  return (
    <WrapStyle>
      <Button
        label={show ? "닫기" : "할 일 추가"}
        color={show ? undefined : "#304ffe"}
        onClick={onClick}
      />
    </WrapStyle>
  );
};

export default ShowInputButton;
