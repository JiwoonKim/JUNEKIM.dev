import React from 'react';
import {  } from 'prop-types';
import styled from '@emotion/styled';

function Navigation({ theme, children }) {
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
  max-height: 300px;
  height: 50%;
  background-color:
`;

const Button = styled.button`

`;