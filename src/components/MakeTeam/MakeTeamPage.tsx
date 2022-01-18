import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useHistory, Route, useRouteMatch} from 'react-router-dom';
import { MakeTeam, MakeTeamDone} from '../index';

function MakeTeamPage(){
    const history = useHistory();
    const match = useRouteMatch();
    
    return (
        <div css={style}>
            <Route path={`${match.path}`} exact render={()=> <MakeTeam/>}/>
            <Route path={`${match.path}/done`} exact render={()=> <MakeTeamDone/>}/>
        </div>
    );
}

const style = css`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export default MakeTeamPage;