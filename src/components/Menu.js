import React from 'react'
import styled, { keyframes } from 'styled-components'
import LogoImg from '../images/logo.svg'

import documentIcon from '../images/icon-document.svg' 
import folderIcon from '../images/icon-folder.svg' 
import uploadIcon from '../images/icon-upload.svg' 

const Entrance = keyframes`
    0% {
      -webkit-transform: scale(2);
              transform: scale(2);
      -webkit-filter: blur(4px);
              filter: blur(4px);
      opacity: 0;
    } 
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-filter: blur(0px);
              filter: blur(0px);
      opacity: 1;
    }    
  `

  const MenuDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 225px;
    padding: 40px;
    background-color: hsl(228, 56%, 26%);
    border-radius: 15px;
    border-top-right-radius: 100px;
    box-sizing: border-box;
    animation: ${Entrance} 2s 0.3s;
  `;

  const Logo = styled.img`
    width: 155px;
    height: 50px;
    cursor: pointer;
  `
  const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
  `

  const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    background-color: #0B1226;
    border-radius: 10px;
    margin-right: 15px;
    cursor: pointer;
  `

  const ButtonImg = styled.img` 
    transform: scale(1.20);
  `

function Menu(props) {

  return (
    <>
      <MenuDiv>   
        <Logo src={LogoImg}/>
        <ButtonsContainer>
          <Button>
            <ButtonImg src={documentIcon} />
          </Button>
          <Button>
            <ButtonImg src={folderIcon} />
          </Button>
          <Button>
            <ButtonImg src={uploadIcon} />
          </Button>
        </ButtonsContainer>
      </MenuDiv>
    </>
  );
}

export default Menu;
