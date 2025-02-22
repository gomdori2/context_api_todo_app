import styled from "@emotion/styled";
import DataView from "components/DataView";
import InputContainer from "components/InputContainer";
import { TodoListContextProvider } from "contexts/TodoListContext";
import { useState } from "react";

const WrapStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

function App() {
  return (
    <WrapStyle>
      <TodoListContextProvider>
        <DataView />
        <InputContainer />
      </TodoListContextProvider>
    </WrapStyle>
  );
}

export default App;
