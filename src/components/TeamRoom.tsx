import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import { useLocation } from "react-router-dom";
import {TeamDetail, ActiveHistory} from '../util/interfaces';
import {divDate} from '../util/util';
import {Tag, Grid, GridColumn} from './index';
import {MemberInfoContainer} from '../containers/index';

interface Props {
    teamInfo: TeamDetail
}

function TeamRoom({teamInfo}: Props){

    const formatDate = (str: string | number)=>{
        const {yy, MM, dd, HH, mm} = divDate(str + '');
        return `${yy}.${MM}.${dd} / ${HH}:${mm}`;
    }

    const getFemaleRate = ()=> Math.floor(100 * (teamInfo.girls / (teamInfo.girls + teamInfo.boys)))

    return (
        <div css={style(getFemaleRate())}>
            <div className='content'>
                <section className='team-info'>
                    <div className='title'>{teamInfo.teamName}</div>
                    <div className='header'>
                        <div className='category'>{teamInfo.category}</div>
                        <div className='box'>
                            <div className='last-act'>{formatDate(teamInfo.lastActive)}에 마지막으로 활동한 팀입니다.</div>
                            <img src='/join-text.png'></img>
                        </div>
                    </div>
                    <div className='team-state'>
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
                                        여{getFemaleRate()}% 남{100 -getFemaleRate()}%
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='field'>평균 연령</div>
                                    <div className='txt-big'>
                                        {teamInfo.averageAge}
                                        <span>세</span>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='field'>활동 팀원</div>
                                    <div className='txt-big'>
                                        {teamInfo.activeNum}
                                        <span>명</span>
                                    </div>
                                    <div className='txt-gray'>
                                        ( 다녀간 팀원{teamInfo.totalJoinNum}명 )
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className='field'>후기</div>
                                    <ul>
                                        {teamInfo.reviewKeyWord.map(word => (
                                            <Tag key={word} name={word} theme='light'/>
                                        ))}
                                    </ul>
                                </div>
                                <div className='col'>
                                    <div className='img-box'>
                                        <div>
                                            <img src='/thumb-up.png'></img>
                                            <div className='num good'>{teamInfo.good}</div>
                                        </div>
                                        <div>
                                            <img src='/thumb-down.png'></img>
                                            <div className='num'>{teamInfo.bad}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='active-state'>
                        <div className='tit'>활동 현황</div>
                        <Grid<ActiveHistory> dataList={teamInfo.activeHistory}>
                            <GridColumn width='60px' field='times' headerText='회차' cellStyle={{color: 'var(--color-gray)', paddingLeft: '10px'}}/>
                            <GridColumn width='330px' field='title' headerText='제목' cellStyle={{fontWeight: 500}} ellipsis={true}/>
                            <GridColumn width='60px' field='place' headerText='지역' cellStyle={{color: 'var(--color-gray)'}}/>
                            <GridColumn width='' field='date' headerText='날짜' cellStyle={{color: 'var(--color-gray)'}} valueFormatFunction={formatDate}/>
                        </Grid>
                    </div>
                </section>
                <section className='member-info'>
                    <MemberInfoContainer/>
                </section>
            </div>
        </div>
    );
}

const style = (FemaleRate: number)=> (css`
.content {
    display: flex;
    
    .team-info {
        margin-right: 24px;
            .title {
                font-size: 36px;
                font-weight: bold;
            }
            .header {
                margin-bottom: 20px;
                border-bottom: 1px solid var(--color-dim-gray);
                .category {
                    font-size: 24px;
                    color: var(--color-gray);
                    margin: 12px 0;
                }
                .box {
                    display: flex;
                    justify-content: space-between;
                    .last-act {
                        font-size: 16px;
                        color: var(--color-main-text);
                    }
                    img {
                        transform: translateY(-30%);
                        cursor: pointer;
                    }
                }
            }
            .team-state {
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
                                    width: ${FemaleRate || '50'}%;
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
            }
            .active-state {
                > .tit {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 24px;
                }
            }
        }
        .member-info {
            // border: 1px solid blue;
        }
    }
`);

export default TeamRoom;