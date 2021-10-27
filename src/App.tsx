import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { GatheringFilterContainers, GatheringListContainers, GatheringDetailContainers, MakeTeamContainers} from './containers/index';
import {Tab} from './components/index';
import {useSelector} from 'react-redux';
import {RootState} from './redux-modules/index';
import {Route, Switch, useHistory} from 'react-router-dom';

function App() {
  const history = useHistory();
  const [showDetail, setShowDetail] = useState(false);
  const {selectedGathering} = useSelector((state: RootState)=> state.gathering);

  const onGatheringSelected = ()=>{
    setShowDetail(pre => !pre);
  }
  
  const onClickBack = ()=>{
    setShowDetail(pre => !pre);
  }

  useEffect(()=>{

  });

  const test = ()=>{
    history.push('/make-team');
  }

  return (
    <div css={style(showDetail)}> 
      <button onClick={test}>TEST</button>
      <div className='top'>탑 메뉴</div>
      <div className='body'>
        <div className='side-menu'>사이드 메뉴</div>
        <main className='content-box'>
          <Switch>
            <Route path='/' exact render={()=> (
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
            <Route path='/make-team' render={()=> <MakeTeamContainers/>}/>
          </Switch>
        </main>
      </div>
      <div className='footer'>Footer</div>
    </div>
  );
}

const style = (showDetail: boolean)=>(css`
  min-height: 100vh;
  background-color: ${showDetail ? '#E5E5E5' : 'white'};

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

  > .top, .footer, .side-menu {
    border: 1px solid black;
    height: 60px;
  }
`);

export default App;
