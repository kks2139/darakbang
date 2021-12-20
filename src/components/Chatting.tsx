import React from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useLocation } from "react-router-dom";
import {ChattingList, ChattingToolbar, ChattingInput} from './index';

interface Params {
    teamId: number
}

function Chatting(){
    const location = useLocation<Params>();
    const {teamId} = location.state;
    const style = css`
        width: 848px;
        .title {
            font-weight: bold;
            font-size: 24px;
        }
    `;

    const onSendMessage = ()=>{
        // 1. 입력한 메시지 서버로 전송
        // 2. ChattingList 에서 api 조회로 리렌더링
    }

    return (
        <div css={style}>
            <div className="title">팀 채팅</div>
            <ChattingList/>
            <ChattingToolbar/>
            <ChattingInput onSendMessage={onSendMessage}/>
        </div>
    );
}

export default Chatting;