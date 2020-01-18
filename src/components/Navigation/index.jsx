import React from 'react';
import styled from '@emotion/styled';

function Navigation({ children }) {
  return (
    <Wrapper>
      {children.map(menuItem => (
        <Button>{menuItem}</Button>
      ))}
    </Wrapper>
  );
}

export default Navigation;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  height: 300px; /* fix */
`;

const Button = styled.button`

`;