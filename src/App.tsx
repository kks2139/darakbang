import React, { useEffect, useRef} from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { 
  ConfirmMessageContainer,
  HeaderContainer,
  NotificationListContainer,
} from './containers/index';
import {Tab, MyTeamPage, MakeTeamPage, GatheringPage, Footer, SideMenu} from './components/index';
import {useSelector} from 'react-redux';
import {RootState} from './redux-modules/index';
import {Route, Switch, useHistory} from 'react-router-dom';

interface Style {
  backgroundColor: string
}

function App() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const {backgroundColor, confirmMessageInfo, showNotificationList} = useSelector((state: RootState)=> state.app);

  useEffect(()=>{
  }, []);

  return (
    <div css={style({backgroundColor})} ref={divRef}> 
      <div className='header'>
        <HeaderContainer/>
      </div>
      <div className='body'>
        {/* <div className='side'>
          <SideMenu />
        </div> */}
        <main className='content-box'>
          <Switch>
            <Route path='/' exact render={(props)=>  <GatheringPage routerProps={props}/>}/>
            <Route path='/gathering' render={(props)=>  <GatheringPage routerProps={props}/>}/>
            <Route path='/make-team' render={(props)=> <MakeTeamPage routerProps={props}/>}/>
            <Route path='/myteam' render={(props)=> <MyTeamPage routerProps={props}/>}/>
          </Switch>
        </main>
        {showNotificationList ? <NotificationListContainer/> : null}
      </div>
      <div className='footer'>
        <Footer />
      </div>
      {confirmMessageInfo.show ? <ConfirmMessageContainer/> : null}
      <ul>

      </ul>
    </div>
  );
}

const style = ({backgroundColor}: Style)=>(css`
  min-height: 100vh;
  background-color: ${backgroundColor || 'white'};

  > .header {
    position: relative;
    z-index: 210;
  }

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

  > .footer {

  }
`);

export default App;
