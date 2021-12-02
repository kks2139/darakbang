import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useHistory, Route, RouteComponentProps} from 'react-router-dom';
import {GatheringFilterContainers, GatheringListContainers, GatheringDetailContainers} from '../../containers/index';
import {Tab} from '../index';

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
        <>
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
        </>
    );
}

const style = css`
    display: flex;
`;

export default GatheringPage;