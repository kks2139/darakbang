import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {Route, useRouteMatch} from 'react-router-dom';
import {Tab, GatheringFilter, GatheringList, GatheringDetail, SideMenu, LoadingSpinner, LoadingMark, LoadingIcon} from '../index';
import useRequest from '../../hooks/useRequest';

interface TestData {
    id: string
    first_name: string
    last_name: string
    gender: string
    age: number
    email: string
    image: string
}

function GatheringPage(){
    const match = useRouteMatch();
    const {isLoading, error, sendRequest} = useRequest();
    const [testData, setTestData] = useState<TestData[] | null>(null);
    
    const onGatheringSelected = ()=>{
    
    }

    const applyData = (data: TestData[])=>{
        setTestData(data);
    }

    const fetchData = ()=>{
        if(!isLoading){
            sendRequest<null, TestData[]>({api: 'getTestData'}, applyData);
        }
    }

    return (
        <div css={style}>
            <SideMenu/>
            <section className='content'>
                <Route path={`${match.path}`} exact>
                        <Tab names={['유료', '일반']}>
                            <div>
                                <button onClick={fetchData}>TEST</button>
                                {!error && isLoading && 
                                    // <LoadingSpinner/> 
                                    // <LoadingMark/>
                                    <LoadingIcon/>
                                }      
                                <LoadingIcon/>
                                <div style={{width: '852px'}}>
                                    {testData && testData.map(data => (
                                        <div key={data.id}>{data.first_name}</div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <GatheringFilter/>
                                <GatheringList onGatheringSelected={onGatheringSelected}/>
                            </div>
                        </Tab>
                </Route>
                <Route path={`${match.path}/detail`}>
                    <GatheringDetail/>
                </Route>
            </section>
        </div>
    );
}

const style = css`
    display: flex;
    justify-content: center;
    > .content {
        width: 1000px;
        /* border: 1px solid blue; */
    }
`;

export default GatheringPage;