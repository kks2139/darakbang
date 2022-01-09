import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {Route, useRouteMatch, Redirect} from 'react-router-dom';
import {Tab, SideMenu, GatheringFilter, GatheringList, GatheringDetail} from '../index';

function GatheringPage(){
    const match = useRouteMatch();
    
    const onGatheringSelected = ()=>{
    
    }

    return (
        <div css={style}>
            <Route path={`${match.path}`} exact>
                <div className='list-box'>
                    <Tab names={['유료', '일반']} width={894}>
                        <div>
                            유료 화면 !
                        </div>
                        <div>
                            <GatheringFilter/>
                            <GatheringList onGatheringSelected={onGatheringSelected}/>
                        </div>
                    </Tab>
                </div>
            </Route>
            <Route path={`${match.path}/detail`}>
                <GatheringDetail/>
            </Route>
        </div>
    );
}

const style = css`
    width: 100%;
    .list-box {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export default GatheringPage;