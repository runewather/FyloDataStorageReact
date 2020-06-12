import React from 'react';
import styled from 'styled-components';

function Content(props) {

  const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
  `;

  return (
    <>
      <ContentDiv>
          {props.children}
      </ContentDiv>
    </>
  );
}

export default Content;
