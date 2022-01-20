import React, { useMemo } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {TeamDetail} from '../../util/interfaces';
import {Tag} from '../index';

interface Props {
    team: TeamDetail
}

function TeamState({team}: Props){
    const femailRate = useMemo(()=> Math.floor(100 * (team.girls / (team.girls + team.boys))), [team]);

    const style = css`
        margin-bottom: 76px;
        > .tit {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 24px;
        }
        .detail-box {
            padding: 24px 24px 3px 24px;
            background-color: var(--color-bg-gray);
            .field {
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 10px;
                text-align: center;
            }
            .row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 12px;
                .col {
                    ul {
                        display: flex;
                    }
                    .txt-gray {
                        font-size: 12px;
                        color: var(--color-gray);
                        margin-top: 8px;
                    }
                    .txt-big {
                        display: flex;
                        justify-content: center;
                        align-items: baseline;
                        font-size: 35px;
                        line-height: 25px;
                        span {
                            font-size: 16px;
                            margin-left: 5px;
                        }
                    }
                    &:first-child {
                        .field {
                            text-align: left;
                        }
                    }
                    .rate-bar {
                        display: flex;
                        width: 143px;
                        height: 32px;
                        border: 1px solid black;
                        [class*='male'] {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 16px;
                        }
                        .female {
                            width: ${femailRate || '50'}%;
                            background-color: var(--color-main-text);
                            border-right: 1px solid black;
                        }
                        .male {
                            flex-grow: 1;
                            background-color: var(--color-yellow);
                        }
                    }
                    .img-box {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 20px 10px 0 10px;
                        width: 100px;
                        height: 100%;
                        .num {
                            font-weight: 500;
                            margin-top: 5px;
                            &.good {
                                color: var(--color-main-text);
                            }
                        }
                    }
                }
            }
        }
    `;

    return (
        <div css={style}>
            <div className='tit'>팀 현황</div>
            <div className='detail-box'>
                <div className='row'>
                    <div className='col'>
                        <div className='field'>비율</div>
                        <div className='rate-bar'>
                            <div className='female'>여</div>
                            <div className='male'>남</div>
                        </div>
                        <div className='txt-gray'>
                            여{femailRate}% 남{100 -femailRate}%
                        </div>
                    </div>
                    <div className='col'>
                        <div className='field'>평균 연령</div>
                        <div className='txt-big'>
                            {team.averageAge}
                            <span>세</span>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='field'>활동 팀원</div>
                        <div className='txt-big'>
                            {team.activeNum}
                            <span>명</span>
                        </div>
                        <div className='txt-gray'>
                            ( 다녀간 팀원{team.totalJoinNum}명 )
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='field'>후기</div>
                        <ul>
                            {team.reviewKeyWord.map(word => (
                                <Tag key={word} name={word} theme='light'/>
                            ))}
                        </ul>
                    </div>
                    <div className='col'>
                        <div className='img-box'>
                            <div>
                                <img src='/thumb-up.png'></img>
                                <div className='num good'>{team.good}</div>
                            </div>
                            <div>
                                <img src='/thumb-down.png'></img>
                                <div className='num'>{team.bad}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamState;