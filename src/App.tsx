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
  NotFound,
  SideMenu
} from './components/index';
import {useSelector} from 'react-redux';
import {RootState} from './store/index';
import {Route, Switch, Redirect} from 'react-router-dom';

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
      <main>
        <SideMenu />
        <div className='content-box'>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/gathering'/>
            </Route>
            <Route path='/gathering'>
              <GatheringPage/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/make-team'>
              <MakeTeamPage/>
            </Route>
            <Route path='/myteam'>
              <MyTeamPage/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </div>
        {showNotificationList && <NotificationList/>}
      </main>
      <Footer />
      {confirmMessageInfo.show && <ConfirmMessage/>}
      {toastMessageList}
    </div>
  );
}

const style = ({backgroundColor}: Style)=>(css`
  min-height: 100vh;
  background-color: ${backgroundColor || 'white'};

  main {
    position: relative;
    display: flex;
    
    > .side {
      width: 200px;
      transition: .3s;
      overflow: hidden;
      &:hover {
        overflow-y: auto;
          overflow-x: hidden;
        }
      }
        
    > .content-box {
      width: 100%;
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
