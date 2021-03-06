import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {LoginForm} from '../index';
import {LoginInput} from '../../util/interfaces';

function Login(){
    const onLogin = (inputs: LoginInput)=>{
        
    }

    const onFindId = ()=>{

    }

    const onFindPw = ()=>{

    }

    const style = css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .title {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 100px;
        }

        .login-btn {
            width: 120px;
            height: 120px;
            color: white;
            font-size: 20px;
            font-weight: bold;
            background-color: var(--color-main-text);
        }
        
        .foot {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 16px;
            &.center {
                display: flex;
                justify-content: center;
            }
            .gray {
                color: var(--color-gray);
                font-size: 16px;
                background-color: white;
            }
        }
    `;

    return (
        <div css={style}>
            <div className='title'>다락방 로그인</div>
            <LoginForm onLogin={onLogin} onFindId={onFindId} onFindPw={onFindPw}/>
        </div>
    );
}

export default Login;