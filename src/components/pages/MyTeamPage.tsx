import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useHistory, Switch, Route, Link, RouteComponentProps} from 'react-router-dom';

interface Props {
    routerProps: RouteComponentProps
}

function MyTeamPage({routerProps}: Props){
    const {match} = routerProps;
    const history = useHistory();
    
    return (
        <>
            <Route path={`${match.path}`} exact render={()=> <div>팀 목록</div>}/>
            <Route path={`${match.path}/room`} exact render={()=> <div>팀 상세</div>}/>
        </>
    );
}

const style = css`
    display: flex;
    flex-direction: column;
`;

export default MyTeamPage;