import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useLocation } from "react-router-dom";
import {ChattingMessage} from '../util/interfaces'; 
import {request, divDate} from '../util/util'; 
import {ChatArea, TextBox} from './index'; 

const testData = [
    {userId: 'me', userName: '광선', time:'20211221222630', message: '고생하셨습니다~'},
    {userId: 'me', userName: '광선', time:'20211221222630', message: '다음 오프라인 공지까지 건강하십시오~'},
    {userId: 'a', userName: '양파', time:'20211221222730', message: '고생하셨습니다~'},
    {userId: 'a', userName: '양파', time:'20211221222730', message: '이제는 우리가 헤어져야 할 시간 다음에 또 만나요~ 라라라랄'},
    {userId: 'b', userName: '감자', time:'20211221222830', message: '고생하셨습니다~'},
    {userId: 'b', userName: '감자', time:'20211221222830', message: '다음 오프라인 공지까지 건강하십시오~'},
    {userId: 'b', userName: '감자', time:'20211221222830', message: '다음 오프라인 공지까지 건강하십시오~'},
    {userId: 'b', userName: '감자', time:'20211221222930', message: '고생요~'},
];

interface Constraint {
    [key: string]: number | string
}

interface Props {
}

function ChattingList({}: Props){
    const refreshMessage = async ()=> {
        const res = await request('refreshMessage');
    }

    const getMinuiteInterval = (t1: string, t2: string)=> {
        let time = divDate(t1);
        const miliSeconds1 = new Date(time.yyyy, time.MM, time.dd, time.HH, time.mm, time.ss).getTime();
        time = divDate(t2);
        const miliSeconds2 = new Date(time.yyyy, time.MM, time.dd, time.HH, time.mm, time.ss).getTime();
        return Math.floor((Math.abs(miliSeconds2 - miliSeconds1)) / 1000 / 60);
    }

    useEffect(()=>{
        // refreshMessage();
    }, []);

    const style = css`
        width: 100%;
        height: 600px;
        background-color: #E7EBB8;
        overflow: auto;
        padding: 20px;
        .chat-box {
            display: flex;
            &.left {
                justify-content: flex-start;
            }
            &.right {
                justify-content: flex-end;
            }
        }
    `
    return (
        <div css={style}>
            {testData.map((data, i, arr) => {
                const isMe = data.userId === 'me';
                const overOneMinuite = arr[i-1] ? getMinuiteInterval(data.time, arr[i-1].time) >= 1 : false;

                return (
                    <div key={i} className={`chat-box ${isMe ? 'right' : 'left'}`}>
                        <ChatArea userName={data.userName} text={data.message} showUser={!isMe && overOneMinuite}>
                            <TextBox text={data.message} customStyle={{backgroundColor: isMe ? 'var(--color-yellow)' : ''}}/>
                        </ChatArea>
                    </div>
                )
            })}
        </div>
    );
}


export default ChattingList;