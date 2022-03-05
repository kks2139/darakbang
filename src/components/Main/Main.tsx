import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import { RankList, GatheringCard } from '../index';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/index';

interface Props {
}


function Main({}: Props){
    const gatheringList = useSelector((state: RootState) => state.gathering.gatheringList);

    const onClickGathering = ()=>{
    
    }

    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            text-align: center;
        }

        .logo {
            margin: 100px 0 0 0;
            cursor: pointer;
        }

        .sub-title {
            font-weight: bold;
            font-size: 20px;
            margin: 200px 0 40px 0;
        }

        .gathering-box {
            /* border: 1px solid red; */
            display: flex;
            width: calc(100% - 100px);
            overflow: auto;
        }
    `;

    return (
        <div css={style}> 
            <h2 className='title'>
                안녕하세요! 다락방팀 입니다.<br/>
                우리는 여러분 전부를 사랑해요.<br/>
                그렇게 다락방이 탄생했습니다!<br/>
            </h2>

            <img className='logo' src='/story.png' alt='story logo'></img>

            <div className='sub-title'>지금 가장 활발한 팀은 어디지?</div>
            <RankList/>

            <div className='sub-title'>지금 가장 인기있는 활동 TOP 10</div>
            <section className='gathering-box'>
                {gatheringList.slice(0, 10).map(info => (
                    <GatheringCard key={info.id} onClickGathering={onClickGathering} info={info}/>
                ))}
            </section>

        </div>
    );
}


export default Main;