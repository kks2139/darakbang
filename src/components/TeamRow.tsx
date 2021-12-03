import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {MyTeam} from '../util/interfaces';
import {divDate} from '../util/util';

interface Props {
    team: MyTeam
    onClickRoom: (param: MyTeam)=> void
}

function TeamRow({team, onClickRoom}: Props){
    const formatDate = (str: string)=> {
        const {yyyy, MM, dd} = divDate(str);
        return `${yyyy}.${MM}.${dd}`;
    }
    
    return (
        <div css={style} className='row' onClick={()=> onClickRoom(team)}>
            <div className='col bold'>{team.teamName}</div>
            <div className='col'>{team.category}</div>
            <div className='col'>{formatDate(team.joinDate)}</div>
            <div className='col center'>{team.joinCount} 회</div>
        </div>
    );
}

const style = css`
`;

export default TeamRow;