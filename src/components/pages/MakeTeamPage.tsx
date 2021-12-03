import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useHistory, Route, RouteComponentProps} from 'react-router-dom';
import {MakeTeamContainers, MakeTeamDoneContainer} from '../../containers';
import {SideMenu} from '../index';

interface Props {
    routerProps: RouteComponentProps
}

function MakeTeamPage({routerProps}: Props){
    const history = useHistory();
    const {match} = routerProps;
    
    return (
        <div css={style}>
            <div className='side'>
                <SideMenu />
            </div>
            <Route path={`${match.path}`} exact render={()=> <MakeTeamContainers/>}/>
            <Route path={`${match.path}/done`} exact render={()=> <MakeTeamDoneContainer/>}/>
        </div>
    );
}

const style = css`
    display: flex;
    > .side {
        padding-right: 95px;
        margin-right: 5px;
        transition: .3s;
        overflow: hidden;
        &:hover {
            overflow-y: auto;
            overflow-x: hidden;
        }
    }
`;

export default MakeTeamPage;