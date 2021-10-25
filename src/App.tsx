import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { GatheringFilterContainers, GatheringListContainers, GatheringDetailContainers} from './containers/index';
import {Tab} from './components/index';
import {useSelector} from 'react-redux';
import {RootState} from './redux-modules/index';

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const {selectedGathering} = useSelector((state: RootState)=> state.gathering);

  const onGatheringSelected = ()=>{
    setShowDetail(pre => !pre);
  }

  const onClickBack = ()=>{
    setShowDetail(pre => !pre);
  }

  return (
    <div css={style(showDetail)}> 
      {selectedGathering ? <GatheringDetailContainers onClickBack={onClickBack}/> : null}
      <div className='tab' hidden={selectedGathering !== null}>
        <Tab names={['유료', '일반']} width={894}>
            <>
              <div>
                유료 화면 ~~~~8888888888888888888888888888888888888888
              </div>
              <div>
                <GatheringFilterContainers/>
                <GatheringListContainers onGatheringSelected={onGatheringSelected}/>
              </div>
            </>
        </Tab>
      </div>
    </div>
  );
}

const style = (showDetail: boolean)=>(css`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  
  background-color: ${showDetail ? '#E5E5E5' : 'white'};
`);

export default App;
