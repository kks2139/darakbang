import React, { useEffect, useState } from 'react';
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

let canMove = true;

function RankList(){
    const {isLoading, error, sendRequest} = useRequest();
    const [rankList, setRankList] = useState<RankInfo[]>([]);
    const longList = rankList.concat(rankList, rankList);
    const [moved, setMoved] = useState(0);
    const [isReset, setIsReset] = useState(false);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
        if(!canMove) return;
        const {name} = e.currentTarget;
        if(name === 'left'){
            setMoved(pre => --pre);
        }else{
            setMoved(pre => ++pre);
        }
        canMove = false;
    }

    const cardTransitionEnd = ()=>{
        const reset = moved >= longList.length - rankList.length || moved <= 0;
        if(reset){
            setIsReset(reset);
            setMoved(rankList.length);
        }
        canMove = true;
    }

    const resetEnd = ()=>{
        setIsReset(false);
        canMove = true;
    }

    useEffect(()=>{
        // 랭킹 1,2,3 팀 조회
        setRankList(TEST_DATA);
        setMoved(TEST_DATA.length);
    }, []);

    const style = css`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .wrapper {
            display: flex;
            align-items: center;
            border: 1px solid red;
            width: 750px;
            height: 500px;
            overflow: hidden;
        }

        .button-box {
            z-index: 2;
            position: absolute;
            display: flex;
            justify-content: space-between;
            width: 900px;
        }
    `;

    return (
        <div css={style}>
            <div className='wrapper'>
                {longList.map((rank, i) => (
                    <RankCard 
                        key={i}
                        rankInfo={rank}
                        moved={moved}
                        isReset={isReset}
                        isFocus={moved + 1 === i}
                        cardTransitionEnd={cardTransitionEnd}
                        resetEnd={resetEnd}/>
                ))}
            </div>
            <div className='button-box'>
                <button name='left' onClick={onClick}>왼쪽</button>
                <button name='right' onClick={onClick}>오른쪽</button>
            </div>
        </div>
    );
}


export default RankList;