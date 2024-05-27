# 1. State와 Props로 할일 목록 앱 개발

- 실제로는 이렇게까지 복잡하게 컴포넌트 구성하지 않습니다.
- ContextApi 실습을 위해 구조를 이렇게 해볼께요.

## 1.1. 컴포넌트 구조

- App
  - TodoList Data
    - DataView (UI)
      - Title
      - TodoList
        - TodoItem
  - Todo Data
    - Input
      - TodoInput
        - TextInput
        - AddButton
      - InputButton

### 1.1.1. 컴포넌트 분리 기준

- 이 구조는 프로젝트 마다 달라질 수 있다.
- pagesComponents : 상태관리만 할 수 있도록 하자
  - pages 폴더 > 화면
  - UiComponents : 화면을 보여주는 UI 로직만 가지도록 하자.
    - components 폴더 > 해당 화면에 들어가는 컴포넌트
    - common > 공통으로 사용할 components를 넣는곳
- ApiComponents : API를 호출하는 비즈니스 로직만 가지도록 해보자.

  - api폴더 > api
  - 빽엔드에 호출해 오는 데이터들 코드들을 집어 넣어 놓는곳.

- PageComponent : 데이터의 상태관리를 할 수 있도록 해보자
- UiComponent : 화면 또는 페이지를 구성하는 UI로직을 가지도록 해보자
- ApiComponent : API로직을 분리 해보자

### NoSQL

- 프론트 일 경우 DBMS 가 아니라
- NoSQL을 사용한다함.
  - ex) startUp 회사들이 보통 사용한다함.

###

- 소비자의 니즈(아이디어)\_소비자도 모르는 니즈(잠재적인 니즈)
  ↓

  ↓

C : create

- 생성

R : read

- 읽기

U : update

- 수정

D : delete

- 삭제
