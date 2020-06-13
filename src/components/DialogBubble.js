import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

  const Opacity = keyframes`
    0% {
    opacity: 0;
    }
    100% {
    opacity: 1;
    }
  `

const DialogBubbleDiv = styled.div`
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
    animation: ${Opacity} 2s 0.3s;
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
  `;

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


function DialogBubble(props) {

  const [storageLeft, setStorageLeft] = useState(0);
  const [loop, setLoop] = useState(null);

  useEffect(() => {  
    if(loop == null) {
      setLoop(setInterval(() => {
        const value = 185
        const time = 3000 / 100
        const addEveryTick = value / time
        setStorageLeft(storageLeft => storageLeft + addEveryTick);
      }, 100))
    }
    if(storageLeft >= 185) {
      setStorageLeft(185);
      clearInterval(loop);
    }
  }, [storageLeft])

  return (
    <>
      <DialogBubbleDiv>
      < StorageNumberSpaceLeft>{Math.floor(storageLeft)}</StorageNumberSpaceLeft>
        <StorageTextSpaceLeft>GB LEFT</StorageTextSpaceLeft>
      </DialogBubbleDiv>
    </>
  );
}

export default DialogBubble;

