import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {MyTeam} from '../../util/interfaces';
import {divDate} from '../../util/util';
import {Grid, GridColumn} from '../index';
import { useHistory, useRouteMatch } from "react-router-dom";
import {useSelector} from 'react-redux';
import {RootState} from '../../store/index';

function MyTeamList(){
    const history = useHistory();
    const match = useRouteMatch();
    const {myTeamList} = useSelector((state: RootState) => state.myTeam);
    const [title, setTitle] = useState('');
    const {pathname} = window.location;

    const onClickRow = (team: MyTeam)=>{
        history.push(`/my-team/room/${team.id}`);
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
            <div className='title'>{title}</div>
            <Grid<MyTeam> dataList={myTeamList} onClickRow={onClickRow}>
                <GridColumn width='180px' field='teamName' headerText='팀 명' cellStyle={{fontWeight: 'bold'}}/>
                <GridColumn width='330px' field='category' headerText='분류' cellStyle={{color: 'var(--color-gray)'}}/>
                <GridColumn width='180px' field='joinDate' headerText='가입 날짜' cellStyle={{color: 'var(--color-gray)'}} valueFormatFunction={formatDate}/>
                <GridColumn field='joinCount' headerText='' cellStyle={{color: 'var(--color-gray)', textAlign: 'center'}} valueFormatFunction={addString}/>
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
`;

export default MyTeamList;