import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {MyTeam} from '../util/interfaces';
import {divDate} from '../util/util';
import {TeamRow, Grid, GridColumn} from './index';
import { useHistory } from "react-router-dom";

interface Props {
    teamList: MyTeam[]
}

function MyTeamList({teamList}: Props){
    const history = useHistory();
    const [title, setTitle] = useState('');
    const {pathname} = window.location;
    const columnConfig = teamList.map(team => ({
        width: '100px',
        headerText: '100px',
    }));

    const onClickRoom = (team: MyTeam)=>{
        history.push({
            pathname: '/myteam/room',
            state: {
                team
            }
        })
    }

    const formatDate = (value: string | number)=> {
        value = value + '';
        const {yyyy, MM, dd} = divDate(value);
        return `${yyyy}.${MM}.${dd}`;
    }
    
    const addString = (value: string | number)=>{
        return value + '회'
    }

    useLayoutEffect(()=>{
        const bool = pathname.indexOf('history') > -1;
        setTitle(bool ? '팀 기록' : '팀 룸');
    }, [pathname]);

    return (
        <div css={style}>
            {/* <div className='title'>{title}</div>
            <div className='table'>
                <div className='header row'>
                    <div className='col'>팀 명</div>
                    <div className='col'>분류</div>
                    <div className='col'>가입 날짜</div>
                </div>
                {teamList.map(team => (
                    <TeamRow key={team.id} team={team} onClickRoom={onClickRoom}/>
                ))}
            </div> */}

            <Grid<MyTeam> title='타이틀' dataList={teamList}>
                <GridColumn field='teamName' headerText='팀 명' cellStyle={{fontWeight: 'bold'}}/>
                <GridColumn field='category' headerText='분류' cellStyle={{color: 'var(--color-gray)'}}/>
                <GridColumn field='joinDate' headerText='가입 날짜' cellStyle={{color: 'var(--color-gray)'}} valueFormatFunction={formatDate}/>
                <GridColumn field='joinCount' headerText='' cellStyle={{color: 'var(--color-gray)'}} valueFormatFunction={addString}/>
            </Grid>

        </div>
    );
}

const style = css`
    .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 35px;
    }
    .table {
        .col {
            &:nth-child(1) {
                width: 180px;
            }
            &:nth-child(2) {
                width: 330px;
            }
            &:nth-child(3) {
                width: 180px;
            }
            &:nth-child(4) {
                flex-grow: 1;
            }
        }
        .row {
            display: flex;
            padding: 18px 15px;
            border-bottom: 1px solid var(--color-light-gray);
            font-size: 20px;
            color: var(--color-gray);
            cursor: pointer;
            transition: .2s;
            &:hover {
                background-color: var(--color-bg-gray);
            }
            .bold {
                font-weight: bold;
                color: black;
            }
            .center {
                text-align: center;
            }
        }
    }
`;

export default MyTeamList;