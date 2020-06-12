import React from 'react'
import Bg from './components/Background'
import BgDetail from './components/BackgroundDetail'
import Wrapper from './components/Wrapper'
import Content from './components/Content'
import Menu from './components/Menu'
import StoragelPanel from './components/StoragePanel'
import 'normalize.css'

function App() {
  return (
    <div className="App">
      <Bg color="hsl(229, 57%, 11%)"/>
      <BgDetail />
      <Wrapper>
        <Content>
          <Menu />
          <StoragelPanel />
        </Content>
      </Wrapper>
    </div>
  );
}

export default App;
