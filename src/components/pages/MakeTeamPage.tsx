import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useHistory, Switch, Route, Link, RouteComponentProps} from 'react-router-dom';
import {MakeTeamContainers, MakeTeamDoneContainer} from '../../containers';

interface Props {
    routerProps: RouteComponentProps
}

function MakeTeamPage({routerProps}: Props){
    const history = useHistory();
    const {match} = routerProps;
    
    return (
        <>
            <Route path={`${match.path}`} exact render={()=> <MakeTeamContainers/>}/>
            <Route path={`${match.path}/done`} exact render={()=> <MakeTeamDoneContainer/>}/>
        </>
    );
}

const style = css`
    display: flex;
`;

export default MakeTeamPage;