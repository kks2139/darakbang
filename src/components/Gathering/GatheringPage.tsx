import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useHistory, Route, RouteComponentProps} from 'react-router-dom';
import {Tab, SideMenu, GatheringFilter, GatheringList, GatheringDetail} from '../index';

interface Props {
    routerProps: RouteComponentProps
}

function GatheringPage({routerProps}: Props){
    const history = useHistory();
    const {match} = routerProps;
    
    const onGatheringSelected = ()=>{
    
    }

    const onClickBack = ()=>{
    
    }

    return (
        <div css={style}>
            <div className='side'>
                <SideMenu />
            </div>
            <Route path={`${match.path}`} exact>
                <Tab names={['유료', '일반']} width={894}>
                    <div>
                        유료 화면 !
                    </div>
                    <div>
                        <GatheringFilter/>
                        <GatheringList onGatheringSelected={onGatheringSelected}/>
                    </div>
                </Tab>
            </Route>
            <Route path={`${match.path}/detail`} exact>
                <GatheringDetail/>
            </Route>
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

export default GatheringPage;