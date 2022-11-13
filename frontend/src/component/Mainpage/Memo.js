import React from 'react';
import styled from 'styled-components';
function Memo(props) {
  return (
    <>
      <Memo_div>
        <Title>Memo</Title>
        <Line></Line>
        <textarea
          placeholder="자신만의 목표를 세워보세요!"
          style={memo_input}
        ></textarea>
      </Memo_div>
    </>
  );
}

export default Memo;

const Memo_div = styled.div`
  margin: 7.5%;
`;

const Title = styled.section`
  font-size: 3vmin;
  font-weight: 600;
`;

const Line = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  opacity: 0.2;
  margin-top: 1vmin;
`;

const memo_input = {
  marginTop: '1vmin',
  fontFamily: 'DMSans',
  fontWeight: '600',
  width: '100%',
  border: 'none',
  height: '10vmin',
  resize: 'none',
};
