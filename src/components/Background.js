import React from 'react';
import styled from 'styled-components';

  const Bg = styled.div`
    position: fixed; 
    width: 100%;
    height: 100vh;
    top: 0; 
    left: 0;
    background-color: ${props => props.color};
    z-index: -999;
  `;

function Background(props) {

  return (
    <>
      <Bg color={props.color}></Bg>
    </>
  );
}

export default Background;
