import React from 'react';
import styled, { keyframes } from 'styled-components';
import DialogBubble from '../components/DialogBubble';

const Scale = keyframes`
    0% {
      -webkit-transform: scale(0.5);
              transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  `;
  
  const LoadProgressBar = keyframes`
    0% {
      width: 0%;
    }
    100% {
      width: 75%;
    }
  `

  const StoragePanelDiv = styled.div`
    width: 600px;
    height: 175px;
    background-color: hsl(228, 56%, 26%);
    border-radius: 15px;
    margin-left: 50px;
    padding: 50px;
    box-sizing: border-box;
    animation: ${Scale} 1s 0.3s linear;
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
    border-radius: 20px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,163,153,1) 0%, rgba(255,77,151,1) 100%);
    padding: 3px;
    box-sizing: border-box;
    animation: ${LoadProgressBar} 2.5s 0.3s normal forwards;
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

function StoragePanel(props) {

  return (
    <>
      <StoragePanelDiv>
        <DialogBubble>
        </DialogBubble>
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
