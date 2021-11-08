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
  const divRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const {selectedGathering} = useSelector((state: RootState)=> state.gathering);
  const {backgroundColor, confirmMessageInfo} = useSelector((state: RootState)=> state.app);

  const onGatheringSelected = ()=>{
    
  }
  
  const onClickBack = ()=>{
    
  }

  const setBodyHeight= ()=>{
    const header = divRef.current?.querySelector('.header');
    const footer = divRef.current?.querySelector('.footer');
    const main = divRef.current?.querySelector('main');
    const side = divRef.current?.querySelector('.side');
    const height = window.innerHeight - footer!.getBoundingClientRect().height - header!.getBoundingClientRect().height;

    main!.style.height = height + 'px';
    if(side instanceof HTMLDivElement){
      side!.style.height = height + 'px';
    }
    
  }

  const onResize = ()=>{
    setBodyHeight();
  }
  
  useEffect(()=>{
    if(!document.body.onresize){
      document.body.onresize = onResize;
      setBodyHeight();
    }
  }, []);

  return (
    <div css={style({backgroundColor})} ref={divRef}> 
      <div className='header'>
        <Header />
      </div>
      <div className='body'>
        <div className='side'>
          <SideMenu />
        </div>
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
      <div className='footer'>
        <Footer />
      </div>
      {confirmMessageInfo.show ? <ConfirmMessageContainer/> : null}
    </div>
  );
}

const style = ({backgroundColor}: Style)=>(css`
  min-height: 100vh;
  background-color: ${backgroundColor || 'white'};

  > .header {

  }

  > .body {
    display: flex;
    justify-content: center;
  
    > .side {
      padding-right: 95px;
      margin-right: 5px;
      transition: .3s;
      overflow: hidden;
      &:hover {
        overflow-y: scroll;
      }
    }
    
    > .content-box {
      padding: 50px 15px 50px 0;
      overflow-y: hidden;
      transition: .3s;
      &:hover {
        overflow-y: scroll;
      }
    }
  }

  > .footer {

  }
`);

export default App;
