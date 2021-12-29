import React, { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useLocation } from "react-router-dom";
import {ChattingMessage} from '../util/interfaces'; 
import {request, divDate} from '../util/util'; 
import {ChatArea, TextBox} from './index'; 

interface Constraint {
    [key: string]: number | string
}

interface Props {
    testData: ChattingMessage[]
}

function ChattingList({testData}: Props){
    const divRef = useRef<HTMLDivElement>(null); 

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

    const scrollToBottom = ()=>{
        const root = divRef.current!;
        const {offsetHeight, scrollHeight} = root;
        root.scrollTo(0, scrollHeight - offsetHeight);
    }

    useEffect(()=>{
        // refreshMessage();

        scrollToBottom();
    }, [testData]);

    const style = css`
        width: 100%;
        height: 600px;
        background-color: #E7EBB8;
        overflow: auto;
        padding: 20px;
        border-radius: 5px 5px 0 0;
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
        <div css={style} ref={divRef}>
            {testData.map((data, i, arr) => {
                const isMe = data.userId === 'me';
                const overOneMinuite = arr[i-1] ? getMinuiteInterval(data.time, arr[i-1].time) >= 1 : false;

                return (
                    <div key={i} className={`chat-box ${isMe ? 'right' : 'left'}`}>
                        <ChatArea userName={data.userName} text={data.message} showUser={!isMe && overOneMinuite}>
                            <TextBox text={data.message} textStyle={{backgroundColor: isMe ? 'var(--color-yellow)' : ''}}/>
                        </ChatArea>
                    </div>
                )
            })}
        </div>
    );
}


export default ChattingList;