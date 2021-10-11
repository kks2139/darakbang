import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { GatheringFilterContainers, GatheringListContainers } from './containers';

function App() {

  return (
    <div css={style}> 
      <GatheringFilterContainers></GatheringFilterContainers>
      <GatheringListContainers></GatheringListContainers>
    </div>
  );
}

const style = css`
  min-height: 100vh;
`;

export default App;
