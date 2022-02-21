import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {Member} from '../../util/interfaces';
import {Avatar, Grid, GridColumn, Border, Tag, Tooltip} from '../index';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/index';

function MemberInfo(){
    const dispatch = useDispatch();
    const {memberList} = useSelector((state: RootState)=> state.myTeam);
    const leader = memberList.find(member => member.isLeader);

    const modifyList = memberList.map(member => {
        const tempMember = {...member};
        tempMember.el = <Avatar imgUrl={member.avatar} style={{width: '42px', height: '42px'}}/>
        return tempMember;
    });

    const addText = (value: string | number)=>{
        return value + '년 차';
    }
    
    const addBorder = (value: string | number)=>{
        return <Border content={value + '회'}/>;
    }

    return (
        <div css={style}>
            {leader ? 
                <div className='leader-info'>
                    <Avatar imgUrl={leader.avatar}/>
                    <ul>
                        <li className='feature'>
                            <Border type='glow' content='팀장'/>
                            <span>{leader.nickname}</span>
                        </li>
                        <li>
                            {leader.activePeriod}년차
                        </li>
                        <li>
                            <Border content={leader.joinCount + ' 회 참여'}/>
                        </li>
                        <li>
                            <Tooltip text={`${leader.nickname}님은 ${leader.tag} 성향입니다.`}>
                                {leader.tag ? <Tag theme='light' name={leader.tag}/> : <></>}
                            </Tooltip>
                        </li>
                    </ul>
                </div>
            : null}
            <div className='member-box'>
                <div className='head'>
                    <span>팀원 현황</span>
                    <Tag name='ENJF'/>
                    <Tag name='ISTJ'/>
                </div>
                <div className='grid-box'>
                    <Grid<Member> dataList={modifyList} hideHeader={true} border={true}>
                        <GridColumn width='' field='el'/>
                        <GridColumn width='80px' field='nickname' cellStyle={{fontSize: '16px', fontWeight: 'bold', paddingLeft: '7px'}}/>
                        <GridColumn width='70px' field='activePeriod' cellStyle={{fontSize: '16px'}} valueFormatFunction={addText}/>
                        <GridColumn width='' field='joinCount' cellStyle={{fontSize: '16px'}} valueFormatFunction={addBorder}/>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

const style = css`
    .leader-info {
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
            text-align: center;
            margin-bottom: 12px;
            &.feature {
                display: flex;
                align-items: center;
                span {
                    font-weight: bold;
                    font-size: 16px;
                    margin-left: 5px;
                }
            }
        }
    }

    .member-box {
        .head {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            span {
                font-size: 24px;
                font-weight: bold;
                margin-right: 5px;
            }
        }
        .grid-box {
            height: 480px;
            overflow: auto;
            box-shadow: 0 2px 20px -20px black;
        }
    }
`;

export default MemberInfo;