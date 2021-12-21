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

    const onSendMessage = ()=>{
        // 1. 입력한 메시지 서버로 전송
        // 2. ChattingList 에서 api 조회로 리렌더링
    }

    const style = css`
        width: 848px;
        .title {
            font-weight: bold;
            font-size: 24px;
            margin-bottom: 24px;
        }
        .wrapper {
            border: 1px solid var(--color-dim-gray);
            border-radius: 5px;
        }
    `;

    return (
        <div css={style}>
            <div className="title">팀 채팅</div>
            <div className='wrapper'>
                <ChattingList/>
                <ChattingToolbar/>
                <ChattingInput onSendMessage={onSendMessage}/>
            </div>
        </div>
    );
}

export default Chatting;