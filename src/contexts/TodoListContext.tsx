import { createContext, useState } from "react";

// 인터페이스(interface)를 사용하는 방식
// 변수/함수를 정의할 때 사용
interface Context {
  todoList: string[]; // 배열의 문자열 반환
  onAdd: (todo: string) => void;
  onDelete: (todo: string) => void;
}

// 타입(type)을 사용하는 방식
// 조건부 string | null 등등

// props 타입정의
interface Props {
  children: JSX.Element | JSX.Element[];
}

// 초기값
const initValue = [
  "contextAPI 공부하기",
  "타입스크립트 공부하기",
  "JWT 공부하기",
];

// Context
// 매개변수
// 매개변수 - void 어떤게 넘어올지를 모름.
export const TodoListContext = createContext<Context>({
  todoList: [],
  onAdd: (): void => {},
  onDelete: (): void => {},
});

// Provider
// 매개변수
export const TodoListContextProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState(initValue);

  const onDelete = (todo: string) => {
    setTodoList(todoList.filter(item => item !== todo));
  };
  const onAdd = (todo: string) => {
    setTodoList([...todoList, todo]);
  };

  return (
    <TodoListContext.Provider value={{ todoList, onAdd, onDelete }}>
      {children}
    </TodoListContext.Provider>
  );
};
