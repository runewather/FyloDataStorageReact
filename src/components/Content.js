import React from 'react';
import styled from 'styled-components';

  const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
  `;

function Content(props) {

  return (
    <>
      <ContentDiv>
          {props.children}
      </ContentDiv>
    </>
  );
}

export default Content;
