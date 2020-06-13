import React from 'react';
import styled from 'styled-components';
import bgDetail from '../images/bg-desktop.svg'

  const BgDetail = styled.div`
    border-top-left-radius: 300px;
    position: fixed; 
    width: 100%;
    height: 50vh;
    background-image: url(${bgDetail});
    background-size: cover;
    bottom: 0;
    z-index: -999;
  `;

function BackgroundDetail(props) {

  return (
    <>
      <BgDetail />
    </>
  );
}

export default BackgroundDetail;
