import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import { useLocation } from "react-router-dom";
import {TeamDetail} from '../util/interfaces';


interface Props {
    teamInfo: TeamDetail
}

function TeamRoom({teamInfo}: Props){
    return (
        <div css={style}>
            {teamInfo.teamName}
        </div>
    );
}

const style = css`
`;

export default TeamRoom;