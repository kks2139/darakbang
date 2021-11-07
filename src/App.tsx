import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { 
  GatheringFilterContainers,
  GatheringListContainers,
  GatheringDetailContainers,
  MakeTeamContainers,
  MakeTeamDoneContainer,
  ConfirmMessageContainer
} from './containers/index';
import {Tab} from './components/index';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from './redux-modules/index';
import {Route, Switch, useHistory} from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SideMenu from './components/common/SideMenu';

import {toggleConfirmMessage} from './redux-modules/app';

interface Style {
  backgroundColor: string
}

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {selectedGathering} = useSelector((state: RootState)=> state.gathering);
  const {backgroundColor, confirmMessageInfo} = useSelector((state: RootState)=> state.app);

  const onGatheringSelected = ()=>{
    
  }
  
  const onClickBack = ()=>{
    
  }

  useEffect(()=>{

  });

  const test = ()=>{
    dispatch(toggleConfirmMessage({
      title: `테스트~~~`,
      // subTitle: '다락방',
      // msg: `성남시 전체
      // 한 번 참여
      // 10월31일 ~~`,
      confirmText: '팀원 모집하기',
      confirmCallback: ()=>{
        console.log('콜백 ~~~~~~');
      },
      show: true
    }));
  } 

  return (
    <div css={style({backgroundColor})}> 
      <button onClick={test}>TEST</button>
      <Header />
      <div className='body'>
        <SideMenu />
        <main className='content-box'>
          <Switch>
            <Route path={['/', '/gatherings']} exact render={()=> (
              <>
                {selectedGathering ? <GatheringDetailContainers onClickBack={onClickBack}/> : null}
                <div className='tab' hidden={selectedGathering !== null}>
                  <Tab names={['유료', '일반']} width={894}>
                      <>
                        <div>
                          유료 화면 ~~
                        </div>
                        <div>
                          <GatheringFilterContainers/>
                          <GatheringListContainers onGatheringSelected={onGatheringSelected}/>
                        </div>
                      </>
                  </Tab>
                </div>
              </>
            )}/>
            <Route path='/make-team' exact render={()=> <MakeTeamContainers/>}/>
            <Route path='/make-team/done' exact render={()=> <MakeTeamDoneContainer/>}/>
          </Switch>
        </main>
      </div>
      <Footer />
      {confirmMessageInfo.show ? <ConfirmMessageContainer/> : null}
    </div>
  );
}

const style = ({backgroundColor}: Style)=>(css`
  min-height: 100vh;
  background-color: ${backgroundColor || 'white'};

  .body {
    display: flex;
    .side-menu {
      width: 125px;
    }
    .content-box {
      width: 100%;
      display: flex;
      padding: 50px 100px;
      // justify-content: center;
    }
  }

  > .side-menu {
    border: 1px solid black;
    height: 60px;
  }
`);

export default App;
