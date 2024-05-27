import styled from "@emotion/styled";
import Title from "./Title";
import TodoList from "./TodoList";

const DataViewWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`;

const DataView = () => {
  return (
    <DataViewWrapStyle>
      {/* 타입스크립트로 변경 시 매개변수가 없을 때도 잡아줌. */}
      <Title label="할 일 목록" />
      <TodoList />
    </DataViewWrapStyle>
  );
};

export default DataView;
