import React from 'react';
import styled from 'styled-components';

function StoragePanel(props) {

  const StoragePanelDiv = styled.div`
    width: 600px;
    height: 175px;
    background-color: hsl(228, 56%, 26%);
    border-radius: 15px;
    margin-left: 50px;
    padding: 50px;
    box-sizing: border-box;
  `;

  const StorageInfo = styled.span`       
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    color: hsl(243, 100%, 93%);
  `

  const ProgressBar = styled.div`
    width: 100%;
    height: 20px;
    margin-top: 25px;
    border-radius: 20px;
    background-color: #151E4A;
    padding: 3px;
  `

  const ProgressBarFill = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
    width: 75%;
    border-radius: 20px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,163,153,1) 0%, rgba(255,77,151,1) 100%);
    padding: 3px;
    box-sizing: border-box;
  `

  const ProgressBarBall = styled.div`
    opacity: 0.95;
    border-radius: 50%;
    background-color: white;
    height: 15px;
    width: 15px;
    justify-self: flex-end;
  `

  const StorageProgress = styled.div`
    display: flex;
    margin-top: 10px;
    font-family: 'Raleway', sans-serif;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;    
  ` 

  const StorageProgressText = styled.span`
    font-family: 'Raleway', sans-serif;
    color: hsl(243, 100%, 93%);
    font-weight: 700;
    font-size: 14px;
  ` 

  const StorageBubbleInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(180%,-130%);
    width: 180px;
    height: 70px;
    background-color: white;
    border-radius: 10px;
    border-bottom-right-radius: 0px;
    color: hsl(229, 7%, 55%);
    font-weight: 700;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 32px solid transparent;
      border-top-color: white;
      border-top: 30px solid white;
      border-left: 30px solid transparent;
      border-right: 0px solid transparent;
      margin-left: 60px;
      margin-bottom: -62px;
    }   
  `

  const StorageNumberSpaceLeft = styled.span`
    font-family: 'Raleway', sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: hsl(229, 57%, 11%);
  `

  const StorageTextSpaceLeft = styled.span`
    transform: translateY(15%);
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    color: hsl(229, 7%, 55%);
    margin-left: 10px;
  `


  return (
    <>
      <StoragePanelDiv>
        <StorageBubbleInfo>
          <StorageNumberSpaceLeft>185</StorageNumberSpaceLeft>
          <StorageTextSpaceLeft>GB LEFT</StorageTextSpaceLeft>
        </StorageBubbleInfo>
        <StorageInfo>You've used <b>815 GB</b> of your storage</StorageInfo>
        <ProgressBar>
          <ProgressBarFill>
            <ProgressBarBall />
          </ProgressBarFill>
        </ProgressBar>  
        <StorageProgress>
          <StorageProgressText>0 GB</StorageProgressText>
          <StorageProgressText>1000 GB</StorageProgressText>
        </StorageProgress>
      </StoragePanelDiv>        
    </>
  );
}

export default StoragePanel;
