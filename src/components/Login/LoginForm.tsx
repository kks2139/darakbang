import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {CheckBox, Button, Input} from '../index';
import {LoginInput} from '../../util/interfaces';
import {useDispatch} from 'react-redux';
import {appActions} from '../../store/app';
import {ToastMessage} from '../index';
import {Link} from 'react-router-dom';

interface Props{
    onLogin: (param: LoginInput)=> void
    onFindId: ()=> void
    onFindPw: ()=> void
}

const getSeq = ()=>{
    let num = 0;
    return ()=>{
        return num++;
    }
}

const count = getSeq();

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
        // dispatch(appActions.toggleToastMessage({
        //     text: `ID 혹은 Password가 올바르지 않습니다.
        //     다시 시도해주세요.`,
        //     show: true
        // }));

        dispatch(appActions.addToastMessage(<ToastMessage key={count()} msg='TEST 12213'/>));
    }

    const style = css`
        margin: 0 24px 0 0;
        display: flex;
        flex-direction: column;
        
        > .wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 440px;

            .login-btn {
                width: 100%;
                height: 52px;
                margin: 20px 0;
            }

            .bottom {
                display: flex;
                justify-content: space-between;
                width: 100%;
                button {
                    background-color: transparent;
                    color: var(--color-gray);
                    font-size: 15px;
                }
            }
    
            .space {
                width: 1px;
                height: 15px;
                transform: translateY(5px);
                background-color: var(--color-dim-gray);
            }

            .gray {
                color: var(--color-gray);
                font-size: 16px;
                background-color: white;
            }
        }
    `;

    return(
        <div css={style}>
            <div className='wrapper'>
                <Input placeholder='ID' value={inputs.id} name='id' autoComplete='off' onChange={onChange} customStyle={{borderBottom: '0'}}/>
                <Input placeholder='Password' type='password' value={inputs.pw} name='pw' autoComplete='off' onChange={onChange}/>
                <button className='login-btn' onClick={onClickLogin}>로그인</button>
                <div className='bottom'>
                    <CheckBox label='ID 기억하기' value={inputs.memoId} onCheckChanged={onCheckChanged} labelStyle={{fontWeight: 'normal', fontSize: '16px', color: 'var(--color-gray)'}}/>
                    <Link className='gray' to='/find-id'>ID 찾기</Link>
                    <div className='space'></div>
                    <Link className='gray' to='/find-pw'>Password 찾기</Link>
                    <Link className='gray' to='/sign-up'>회원가입</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;