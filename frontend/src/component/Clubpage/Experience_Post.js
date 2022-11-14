import React from 'react';
import styled from 'styled-components';
function Experience_Post(props) {
  return (
    <>
      <Experience>
        <Title>Experience Post</Title>
      </Experience>
    </>
  );
}

export default Experience_Post;
const Experience = styled.div`
  margin: 3vmin;
`;
const Title = styled.section`
  font-size: 3vmin;
  font-weight: 600;
`;
