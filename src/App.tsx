import React, { useLayoutEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {CSSTransition} from 'react-transition-group';
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
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from './store/index';
import {Route, Switch, Redirect} from 'react-router-dom';

interface Style {
  backgroundColor: string
}

function App() {
  const location = useLocation();
  const {pathname} = location;
  const [showSideMenu, setShowSideMenu] = useState(false);
  const {
    backgroundColor, 
    confirmMessageInfo, 
    showNotificationList,
    toastMessageList
  } = useSelector((state: RootState)=> state.app);

  useLayoutEffect(()=>{
    setShowSideMenu(
      pathname.includes('gathering') || 
      pathname.includes('make-team')
    );
  }, [pathname]);

  return (
    <div css={style({backgroundColor})}> 
      <Header/>
      <main>
        {showSideMenu && <SideMenu />}
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
            <Route path='/my-team'>
              <MyTeamPage/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </div>
        <CSSTransition
          in={showNotificationList}
          unmountOnExit
          timeout={500}
          classNames={{
            enterActive: 'fade-in',
            exitActive: 'fade-out'
          }}>
          <NotificationList/>
        </CSSTransition>
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
