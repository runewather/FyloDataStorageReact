import React from 'react';
import styled from 'styled-components';

function Background(props) {

  const Bg = styled.div`
    position: fixed; 
    width: 100%;
    height: 100vh;
    top: 0; 
    left: 0;
    background-color: ${props.color};
    z-index: -999;
  `;

  return (
    <>
      <Bg></Bg>
    </>
  );
}

export default Background;
