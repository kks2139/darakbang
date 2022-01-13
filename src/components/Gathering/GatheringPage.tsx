import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {Route, useRouteMatch} from 'react-router-dom';
import {Tab, GatheringFilter, GatheringList, GatheringDetail} from '../index';
import useRequest from '../../hooks/useRequest';
import {LoadingSpinner, LoadingMark} from '../index';

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
            <Route path={`${match.path}`} exact>
                <div className='list-box'>
                    <Tab names={['유료', '일반']} width={894} tabStyle={{margin: '0 auto'}}>
                        <div>
                            <button onClick={fetchData}>TEST</button>
                            {!error && isLoading && 
                                <LoadingSpinner/> 
                                // <LoadingMark/>
                            }      
                            <div>
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
    }
`;

export default GatheringPage;