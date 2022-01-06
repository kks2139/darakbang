import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {CheckBox} from '../index';
import {LoginInput} from '../../util/interfaces';
import {useDispatch} from 'react-redux';
import {toggleToastMessage} from '../../redux-modules/app';

interface Props{
    onLogin: (param: LoginInput)=> void
    onFindId: ()=> void
    onFindPw: ()=> void
}

function LoginForm({onLogin, onFindId, onFindPw}: Props){
    const dispatch = useDispatch();
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
        let result = true;
        if(!inputs.id.trim()){
            
        }
        if(!inputs.pw.trim()){

        }
        return [];
    }
    
    const onClickLogin = ()=>{
        dispatch(toggleToastMessage({
            text: '테스트 ~~~~~~',
            show: true
        }));
    }

    const style = css`
        margin: 0 24px 0 0;
        display: flex;
        .left-box {
            width: 360px;
            margin-right: 24px;
        }
        .right-box {
            display: flex;
            flex-direction: column;
        }
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
            <div className='left-box'>
                <div className='inputs'>
                    <input placeholder='ID' value={inputs.id} name='id' autoComplete='off' onChange={onChange}/>
                    <input placeholder='Password' type='password' value={inputs.pw} name='pw' autoComplete='off' onChange={onChange}/>
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
            <div className='right-box'>
                <button className='login-btn' onClick={onClickLogin}>로그인</button>
                <div className='foot center'>
                    <button className='gray'>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;