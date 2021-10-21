import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { GatheringFilterContainers, GatheringListContainers, GatheringDetailContainers} from './containers/index';
import {Tab} from './components/index';
import {useSelector} from 'react-redux';
import {RootState} from './redux-modules/index';

function App() {
  const {selectedGathering} = useSelector((state: RootState)=> state.gathering);


  return (
    <div css={style}> 
      {selectedGathering ? <GatheringDetailContainers/> : null}
      <div className='tab' hidden={selectedGathering !== null}>
        <Tab names={['유료', '일반']} width={894}>
            <>
              <div>
                유료 화면 ~~~~
              </div>
              <div>
                <GatheringFilterContainers/>
                <GatheringListContainers/>
              </div>
            </>
        </Tab>
      </div>
    </div>
  );
}

const style = css`
  min-height: 100vh;
  // background-color: #E5E5E5;
  display: flex;
  justify-content: center;
`;

export default App;
