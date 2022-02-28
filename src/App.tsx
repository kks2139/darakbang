import React, { Suspense } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
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
  LoadingIcon,
  SignUp,
  Main,
} from './components/index';
import {useSelector} from 'react-redux';
import {RootState} from './store/index';
import {Route, Switch, Redirect} from 'react-router-dom';

const GatheringPage = React.lazy(()=> import('./components/Gathering/GatheringPage'));
const MakeTeamPage = React.lazy(()=> import('./components/MakeTeam/MakeTeamPage'));
const MyTeamPage = React.lazy(()=> import('./components/MyTeam/MyTeamPage'));
const Welcome = React.lazy(()=> import('./components/Welcome/Welcome'));

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
        padding: 50px 15px 50px 15px;
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
      {/* <LoadingIcon/> */}
      <div>
        <Header/>
        <main>
          <div className='content-box'>
            <Suspense fallback={<LoadingMark/>}>
              <Switch>
                <Route path='/' exact>
                  <Main/>
                  {/* <Redirect to='/gathering'/> */}
                </Route>
                <Route path='/login'>
                  <Login/>
                </Route>
                <Route path='/sign-up'>
                  <SignUp/>
                </Route>
                <Route path='/welcome'>
                  <Welcome/>
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
        </main>
      </div>
      <Footer />
      {confirmMessageInfo.show && <ConfirmMessage/>}
      {toastMessageList}
    </div>
  );
}

export default App;
