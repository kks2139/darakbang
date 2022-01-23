import React, { Suspense } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {CSSTransition} from 'react-transition-group';
import {
  // MyTeamPage, 
  // MakeTeamPage, 
  // GatheringPage, 
  Footer, 
  ConfirmMessage, 
  Header, 
  NotificationList, 
  Login, 
  NotFound,
  NotificationDetail,
  LoadingMark,
  LoadingSpinner,
  SignUp

} from './components/index';
import {useSelector} from 'react-redux';
import {RootState} from './store/index';
import {Route, Switch, Redirect} from 'react-router-dom';

const GatheringPage = React.lazy(()=> import('./components/Gathering/GatheringPage'));
const MakeTeamPage = React.lazy(()=> import('./components/MakeTeam/MakeTeamPage'));
const MyTeamPage = React.lazy(()=> import('./components/MyTeam/MyTeamPage'));

function App() {
  const {
    backgroundColor, 
    confirmMessageInfo, 
    showNotificationList,
    toastMessageList
  } = useSelector((state: RootState)=> state.app);

  const style = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    background-color: ${backgroundColor};

    main {
      position: relative;
      display: flex;
      
      > .content-box {
        width: 100%;
        min-height: 600px;
        padding: 50px 15px 50px 0;
        overflow-y: hidden;
        transition: .3s;
        &:hover {
          overflow-y: auto;
          overflow-x: hidden;
        }
      }
    }
  `;

  return (
    <div css={style}> 
      <div>
        <Header/>
        <main>
          <div className='content-box'>
            <Suspense fallback={<LoadingSpinner/>}>
              <Switch>
                <Route path='/' exact>
                  <Redirect to='/gathering'/>
                </Route>
                <Route path='/login'>
                  <Login/>
                </Route>
                <Route path='/sign-up'>
                  <SignUp/>
                </Route>
                <Route path='/gathering'>
                  <GatheringPage/>
                </Route>
                <Route path='/make-team'>
                  <MakeTeamPage/>
                </Route>
                <Route path='/my-team'>
                  <MyTeamPage/>
                </Route>
                <Route path='/notification'>
                  <NotificationDetail/>
                </Route>
                <Route path='*'>
                  <NotFound/>
                </Route>
              </Switch>
            </Suspense>
          </div>
          {/* timeout: react는 css에 정의된 애니메이션 지속 시간을 모르기 때문에 이를 명시적으로 알려준다. */}
          <CSSTransition
            in={showNotificationList}
            unmountOnExit
            timeout={600}
            classNames={{
              enterActive: 'fade-in',
              exitActive: 'fade-out'
            }}>
            <NotificationList/>
          </CSSTransition>
        </main>
      </div>
      <Footer />
      {confirmMessageInfo.show && <ConfirmMessage/>}
      {toastMessageList}
    </div>
  );
}

export default App;
