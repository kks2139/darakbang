import React, { useEffect } from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useLocation } from "react-router-dom";
import {ChattingMessage} from '../util/interfaces'; 
import {request} from '../util/util'; 

interface Props {
}

function ChattingList({}: Props){
    const style = css`
    `;

    const refreshMessage = async ()=> {
        const res = await request('refreshMessage');
    }

    useEffect(()=>{
        // refreshMessage();
    }, []);

    return (
        <div css={style}>
            
        </div>
    );
}

const test = [
    {userId: 'kks', message: '고생하셨습니다~'},
    {userId: 'kks', message: '다음 오프라인 공지까지 건강하십시오~'},
    {userId: 'a', message: '고생하셨습니다~'},
    {userId: 'a', message: '이제는 우리가 헤어져야 할 시간 다음에 또 만나요~ 라라라랄'},
    {userId: 'b', message: '고생하셨습니다~'},
    {userId: 'b', message: '다음 오프라인 공지까지 건강하십시오~'},
    {userId: 'b', message: '다음 오프라인 공지까지 건강하십시오~'},
    {userId: 'b', message: '고생요~'},
];

export default ChattingList;