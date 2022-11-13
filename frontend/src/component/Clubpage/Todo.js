import React from 'react';
import styled from 'styled-components';
function Todo(props) {
  return (
    <>
      <Todo_div>
        <Title>Todo List</Title>
      </Todo_div>
    </>
  );
}

export default Todo;
const Todo_div = styled.div``;
const Title = styled.section`
  font-size: 3vmin;
  font-weight: 600;
`;
