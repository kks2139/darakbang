import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useLocation } from 'react-router-dom';

interface Props {
    text?: string
    readOnly?: boolean
    onSendMessage: (param: string)=>void
}

function ChattingInput({text='', readOnly=false, onSendMessage}: Props){
    const [msg, setMsg] = useState(text);
    const [disabled, setDisabled] = useState(true);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        const {value} = e.currentTarget;
        setMsg(value);
        setDisabled(value.trim() ? false : true);
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>)=>{
        if(e.code === 'Enter' && !e.shiftKey){
            e.preventDefault();
            handleSendMessage();
        }
    }

    const handleSendMessage = ()=>{
        if(msg.trim()){
            onSendMessage(msg);
        }
        setMsg('');
        setDisabled(true);
    }

    const style = css`
        display: flex;
        align-items: center;
        height: 92px;
        padding: 8px 12px;
        background-color: white;
        border-radius: 0 0 5px 5px;
        textarea {
            width: 100%;
            height: 100%;
            font-size: 16px;
            font-weight: 500;
        }
        .send-btn {
            width: 120px;
            height: 60px;
            border: 2px solid var(--color-main-text);
            border-radius: 50px;
            font-size: 24px;
            font-weight: bold;
            color: var(--color-main-text);
            background-color: white;
            cursor: pointer;
            &:disabled {
                border-color: var(--color-light-gray);
                background-color: var(--color-bg-gray);
                color: var(--color-light-gray);
            }
        }
    `;

    return (
        <div css={style}>
            <textarea value={msg} disabled={readOnly} onKeyPress={onKeyPress} onChange={onChange}/>
            <button className='send-btn' disabled={readOnly || disabled} onClick={handleSendMessage}>전송</button>
        </div>
    );
}

export default ChattingInput;