import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useHistory, Route, useRouteMatch} from 'react-router-dom';
import { MakeTeam, MakeTeamDone, SideMenu} from '../index';

function MakeTeamPage(){
    const history = useHistory();
    const match = useRouteMatch();
    
    return (
        <div css={style}>
            <SideMenu/>
            <section className='content'>
                <Route path={`${match.path}`} exact render={()=> <MakeTeam/>}/>
                <Route path={`${match.path}/done`} exact render={()=> <MakeTeamDone/>}/>
            </section>
        </div>
    );
}

const style = css`
    display: flex;
    width: 100%;
    justify-content: center;
    > .content {
        width: 1000px;
    }
`;

export default MakeTeamPage;