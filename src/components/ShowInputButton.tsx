import React from "react";
import Button from "./Button";
import styled from "@emotion/styled";

interface Props {
  show?: boolean;
  onClick: () => void;
}

const WrapStyle = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 999;
`;

// 타입을 정해주면 줘야할지 말아야할지 알기쉽다.
const ShowInputButton = ({ show, onClick }: Props) => {
  return (
    <WrapStyle>
      {/* show는 true / false로 삼항연산자로 글만 넣어줌 라벨에 헷갈리지 말자. */}
      <Button
        label={show ? "닫기" : "할 일 추가"}
        color={show ? undefined : "#304ffe"}
        onClick={onClick}
      />
    </WrapStyle>
  );
};

export default ShowInputButton;
