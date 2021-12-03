import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useHistory, Route, RouteComponentProps} from 'react-router-dom';
import {GatheringFilterContainers, GatheringListContainers, GatheringDetailContainers} from '../../containers/index';
import {Tab, SideMenu} from '../index';

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
            <Route path={`${match.path}`} exact render={()=> (
                <Tab names={['유료', '일반']} width={894}>
                    <>
                    <div>
                        유료 화면 ~~
                    </div>
                    <div>
                        <GatheringFilterContainers/>
                        <GatheringListContainers onGatheringSelected={onGatheringSelected}/>
                    </div>
                    </>
                </Tab>
            )}/>
            <Route path={`${match.path}/detail`} exact render={()=> <GatheringDetailContainers onClickBack={onClickBack}/>}/>
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