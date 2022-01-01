import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {CheckBox} from '../index';
import {LoginInput} from '../../util/interfaces';

interface Props{
    onSubmit: (param: LoginInput)=> void
    onFindId: ()=> void
    onFindPw: ()=> void
}

function LoginForm({onSubmit}: Props){
    const [inputs, setInputs] = useState({
        id: '',
        pw: '',
        memoId: false
    });

    const onCheckChanged = (check: boolean)=>{
        setInputs({
            ...inputs,
            memoId: check
        });
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.currentTarget;
        setInputs({
            ...inputs,
            [name]: value
        });
    }
    
    const validate = ()=>{

    }

    const style = css`
        width: 360px;
        margin: 0 24px 0 0;
        .inputs {
            & > input:first-child {
                margin-bottom: 16px;
            } 
        }
        input {
            width: 360px;
            height: 52px;
            padding: 16px 12px;
            border: 1px solid var(--color-dim-gray);
            font-size: 20px;
            &::placeholder {
                color: var(--color-gray);
            }
        }
        .foot {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 16px;
            .button-box {
                display: flex;
            }
            .gray {
                color: var(--color-gray);
                font-size: 16px;
                background-color: white;
            }
        }
        .col {
            width: 1px;
            height: 15px;
            background-color: var(--color-gray);
            margin: 0 14px;
            transform: translateY(5px);
        }
    `;

    return(
        <div css={style}>
            <div className='inputs'>
                <input placeholder='ID' value={inputs.id} name='id' onChange={onChange}/>
                <input placeholder='Password' value={inputs.pw} name='pw' onChange={onChange}/>
            </div>
            <div className='foot'>
                <div className='button-box'>
                    <button className='gray'>ID 찾기</button>
                    <div className='col'></div>
                    <button className='gray'>Password 찾기</button>
                </div>
                <CheckBox label='ID 기억하기' value={inputs.memoId} onCheckChanged={onCheckChanged} labelStyle={{fontWeight: 'normal', fontSize: '16px', color: 'var(--color-gray)'}}/>
            </div>
        </div>
    );
}

export default LoginForm;