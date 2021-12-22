import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useLocation } from "react-router-dom";
import {ChattingList, ChattingToolbar, ChattingInput} from './index';
import {ChattingMessage} from '../util/interfaces';

interface Params {
    teamId: number
}

function Chatting(){
    // 테스트용 데이터
    const [testData, setTestData] = useState<ChattingMessage[]>([
        {userId: 'me', userName: '광선', time:'20211221222630', message: '고생하셨습니다~'},
        {userId: 'me', userName: '광선', time:'20211221222630', message: '다음 오프라인 공지까지 건강하십시오~'},
        {userId: 'a', userName: '양파', time:'20211221222730', message: '고생하셨습니다~'},
        {userId: 'a', userName: '양파', time:'20211221222730', message: '이제는 우리가 헤어져야 할 시간 다음에 또 만나요~ 라라라랄'},
        {userId: 'b', userName: '감자', time:'20211221222830', message: '고생하셨습니다~'},
        {userId: 'b', userName: '감자', time:'20211221222830', message: '다음 오프라인 공지까지 건강하십시오~'},
        {userId: 'b', userName: '감자', time:'20211221222830', message: '다음 오프라인 공지까지 건강하십시오~'},
        {userId: 'b', userName: '감자', time:'20211221222930', message: '고생요~'},
    ]);
    const location = useLocation<Params>();
    const {teamId} = location.state;

    const onSendMessage = (msg: string)=>{
        // 1. 입력한 메시지 서버로 전송
        // 2. ChattingList 에서 api 조회로 리렌더링
        
        // 테스트 데이터 set
        const dt = new Date();
        const time = dt.getFullYear() + dt.getMonth() + dt.getDate() + dt.getHours() + dt.getMinutes() + dt.getSeconds() + '';
        const newTestData = {userId: 'me', userName: '광선', time, message: msg}
        setTestData(testData.concat(newTestData));
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
                <ChattingList testData={testData}/>
                <ChattingToolbar/>
                <ChattingInput onSendMessage={onSendMessage}/>
            </div>
        </div>
    );
}

export default Chatting;