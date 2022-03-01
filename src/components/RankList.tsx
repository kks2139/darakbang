import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useRequest from '../hooks/useRequest';
import {RankInfo} from '../util/interfaces';
import {RankCard} from '../components/index';

const TEST_DATA = [
    {
        rank: 1,
        teamName: '다락방',
        lastActivity: '2022.2월 26일 30번째 활동',
        category: '라이프 > 도전',
        genderRatio: '성비 균등',
        totalMember: 148,
    },
    {
        rank: 2,
        teamName: '가락방',
        lastActivity: '2022.2월 24일 14번째 활동',
        category: '취미 > 스포츠 > 자전거',
        genderRatio: '성비 균등',
        totalMember: 166,
    },
    {
        rank: 3,
        teamName: '나락방',
        lastActivity: '2022.2월 14일 10번째 활동',
        category: '커리어 > 면접',
        genderRatio: '성비 균등',
        totalMember: 76,
    },
]

function RankList(){
    const [rankList, setRankList] = useState<RankInfo[]>([]);
    const {isLoading, error, sendRequest} = useRequest();

    useEffect(()=>{
        // 랭킹 1,2,3 팀 조회
        
        setRankList(TEST_DATA);

    }, []);

    const style = css`
        display: flex;
        align-items: center;
    `;

    return (
        <div css={style}>
            {rankList.map(rank => (
                <RankCard rankInfo={rank}/>
            ))}
        </div>
    );
}


export default RankList;