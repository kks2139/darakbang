import React, { useEffect, useRef} from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {
  MyTeamPage, 
  MakeTeamPage, 
  GatheringPage, 
  Footer, 
  ConfirmMessage, 
  Header, 
  NotificationList, 
  Login, 
} from './components/index';
import {useSelector} from 'react-redux';
import {RootState} from './store/index';
import {Route, Switch} from 'react-router-dom';

interface Style {
  backgroundColor: string
}

function App() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const {
    backgroundColor, 
    confirmMessageInfo, 
    showNotificationList,
    toastMessageList
  } = useSelector((state: RootState)=> state.app);

  return (
    <div css={style({backgroundColor})} ref={divRef}> 
      <Header/>
      <div className='body'>
        <main className='content-box'>
          <Switch>
            <Route path='/' exact render={(props)=> <GatheringPage routerProps={props}/>}/>
            <Route path='/gathering' render={(props)=> <GatheringPage routerProps={props}/>}/>
            <Route path='/login' render={()=> <Login/>}/>
            <Route path='/make-team' render={(props)=> <MakeTeamPage routerProps={props}/>}/>
            <Route path='/myteam' render={(props)=> <MyTeamPage routerProps={props}/>}/>
          </Switch>
        </main>
        {showNotificationList && <NotificationList/>}
      </div>
      <Footer />
      {confirmMessageInfo.show && <ConfirmMessage/>}
      {toastMessageList}
    </div>
  );
}

const style = ({backgroundColor}: Style)=>(css`
  min-height: 100vh;
  background-color: ${backgroundColor || 'white'};

  > .body {
    position: relative;
    display: flex;
    justify-content: center;
  
    > .side {
      padding-right: 95px;
      margin-right: 5px;
      transition: .3s;
      overflow: hidden;
      &:hover {
        overflow-y: auto;
        overflow-x: hidden;
      }
    }
    
    > .content-box {
      padding: 50px 15px 50px 0;
      overflow-y: hidden;
      transition: .3s;
      &:hover {
        overflow-y: auto;
        overflow-x: hidden;
      }
    }
  }
`);

export default App;
