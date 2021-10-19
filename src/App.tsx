import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { GatheringFilterContainers, GatheringListContainers} from './containers';
import {Tab} from './components/index';

function App() {

  return (
    <div css={style}> 
      <Tab names={['유료', '일반']} width={894}>
          <>
            <div>
              유료 화면 ~~~~
            </div>
            <div>
              <GatheringFilterContainers></GatheringFilterContainers>
              <GatheringListContainers></GatheringListContainers>
            </div>
          </>
      </Tab>
    </div>
  );
}

const style = css`
  min-height: 100vh;

  display: flex;
  justify-content: center;
`;

export default App;
