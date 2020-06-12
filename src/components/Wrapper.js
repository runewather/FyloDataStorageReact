import React from 'react';
import styled from 'styled-components';

function Wrapper(props) {

  const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1440px;
    height: 100vh;
    margin: 0 auto;
    left: 0;
    top: 0;
  `;

  return (
    <>
      <WrapperDiv>
          {props.children}
      </WrapperDiv>
    </>
  );
}

export default Wrapper;
