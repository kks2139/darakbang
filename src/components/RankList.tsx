import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useRequest from '../hooks/useRequest';
import {RankInfo} from '../util/interfaces';
import {RankCard} from '../components/index';

const TEST_DATA = [
    {
        rank: 2,
        teamName: '가락방',
        lastActivity: '2022.2월 24일 14번째 활동',
        category: '취미 > 스포츠 > 자전거',
        genderRatio: '성비 균등',
        totalMember: 166,
    },
    {
        rank: 1,
        teamName: '다락방',
        lastActivity: '2022.2월 26일 30번째 활동',
        category: '라이프 > 도전',
        genderRatio: '성비 균등',
        totalMember: 148,
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
    const {isLoading, error, sendRequest} = useRequest();
    const [rankList, setRankList] = useState<RankInfo[]>(TEST_DATA);

    const style = css`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        > .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
        }

        .button-box {
            z-index: 2;
            position: absolute;
            display: flex;
            justify-content: space-between;
            width: 900px;
            > button {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                color: white;
                background-color: var(--color-light-gray);
                font-size: 25px;
                font-weight: bold;
            }
        }
    `;

    return (
        <div css={style}>
            <div className='wrapper'>
                {rankList.map((rank, i) => (
                    <RankCard 
                        key={i}
                        isTop={rank.rank === 1}
                        rankInfo={rank}/>
                ))}
            </div>
        </div>
    );
}


export default RankList;