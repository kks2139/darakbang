import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import { useHistory } from "react-router-dom";
import {TeamDetail, ActiveHistory} from '../../util/interfaces';
import {divDate} from '../../util/util';
import {TeamState, Grid, GridColumn, MemberInfo} from '../index';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/index';

interface Params {
    team: TeamDetail
}

function TeamRoom(){
    const history = useHistory();
    const {selectedTeamRoom} = useSelector((state: RootState)=> state.myTeam);

    const formatDate = (str: string | number)=>{
        const {yy, MM, dd, HH, mm} = divDate(str + '');
        return `${yy}.${MM}.${dd} / ${HH}:${mm}`;
    }

    const onClickTalk = ()=> {
        history.push('chatting', {
            state: {
                teamId: selectedTeamRoom.id
            }
        });
    }

    const style = css`
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
                        .img-wrapper {
                            position: relative;
                            display: flex;
                            justify-content: center;
                            cursor: pointer;
                            img {
                                transform: translateY(-30%);
                                cursor: pointer;
                            }
                            span {
                                position: absolute;
                                top: -5px;
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
            }
        }
    `;

    return (
        <div css={style}>
            <div className='content'>
                <section className='team-info'>
                    <div className='title'>{selectedTeamRoom.teamName}</div>
                    <div className='header'>
                        <div className='category'>{selectedTeamRoom.category}</div>
                        <div className='box'>
                            <div className='last-act'>{formatDate(selectedTeamRoom.lastActive)}에 마지막으로 활동한 팀입니다.</div>
                            <div className='img-wrapper' onClick={onClickTalk}>
                                {/* <img src='/join-text.png'></img> */}
                                <img src='/talk.png'></img>
                                <span>124</span>
                            </div>
                        </div>
                    </div>
                    <TeamState team={selectedTeamRoom}/>
                    <div className='active-state'>
                        <div className='tit'>활동 현황</div>
                        <Grid<ActiveHistory> dataList={selectedTeamRoom.activeHistory}>
                            <GridColumn width='60px' field='times' headerText='회차' cellStyle={{color: 'var(--color-gray)', paddingLeft: '10px'}}/>
                            <GridColumn width='330px' field='title' headerText='제목' cellStyle={{fontWeight: 500}} ellipsis={true}/>
                            <GridColumn width='60px' field='place' headerText='지역' cellStyle={{color: 'var(--color-gray)'}}/>
                            <GridColumn width='' field='date' headerText='날짜' cellStyle={{color: 'var(--color-gray)'}} valueFormatFunction={formatDate}/>
                        </Grid>
                    </div>
                </section>
                <section className='member-info'>
                    <MemberInfo/>
                </section>
            </div>
        </div>
    );
}

export default TeamRoom;