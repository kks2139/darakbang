import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { GatheringFilterContainers, GatheringListContainers } from './containers';

function App() {

  return (
    <div css={style}> 
      <div className='kks'>
        <GatheringFilterContainers></GatheringFilterContainers>
        <GatheringListContainers></GatheringListContainers>
      </div>
    </div>
  );
}

const style = css`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  .kks {
    width: 852px;
  }
`;

export default App;
