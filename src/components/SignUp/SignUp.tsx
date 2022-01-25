import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {Input, Form, SignUpFormInputs as Row, CheckBox, Space, Combobox} from '../index';

const test_age = [
    {label: '25', value: 'a1'},
    {label: '26', value: 'a2'},
    {label: '27', value: 'a3'},
];
const test_place = [
    {label: '강남', value: 'p1'},
    {label: '강북', value: 'p2'},
    {label: '강동', value: 'p2'},
];
const test_mail = [
    {label: 'naver', value: 'm1'},
    {label: 'gmail', value: 'm2'},
    {label: 'daum', value: 'm3'},
];

function SignUp(){
    const [userInput, setUserInput] = useState({
        name: '',
        nickname: '',
        id: '',
        pw: '',
        pwConfirm: '',
        male: false,
        female: false,
        age: '',
        place: '',
        email: '',
        addr1: '',
        addr2: '',
        addr3: '',
        phone: '',
    });


    const onChange = (e: React.ChangeEvent<HTMLInputElement>, name: string = '')=>{
        setUserInput({
            ...userInput,
            [name]: e.currentTarget.value
        });
    }

    const onCheckChanged = (checked: boolean, name: string = '')=>{
        setUserInput({
            ...userInput,
            male: name === 'male',
            female: name === 'female',
        });
    }

    const onSelected = ()=>{

    }

    const onSearchAddress = ()=>{

    }

    const onAuthenticate = ()=>{

    }
    
    const onClickSignUp = ()=>{

    }

    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
            font-size: 36px;
            margin-bottom: 100px;
        }
        .space {
            margin: 0 20px;
        }
        .btn {
            height: 51px;
            text-align: center;
            border: 1px solid var(--color-main-text);
            box-shadow: inset 0 0 0 2px var(--color-main-text);
            font-size: 16px;
            font-weight: bold;
            padding: 0 35px;
            background-color: white;
        }
        .gray {
            color: var(--color-gray);
        }
        .underline {
            font-size: 16px;
            text-decoration: underline;
            margin-left: 10px;
            cursor: pointer;
        }
    `;

    return (
        <div css={style}>
            <h2 className='title'>다락방 회원가입</h2>
            <Form width='650px'>
                <Row fieldWidth={192} field='이름' required={true}>
                    <Input name='name' value={userInput.name} width='264px' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field='아이디' required={true}>
                    <Input name='id' value={userInput.id} width='264px' onChange={onChange}/>
                    <span className='gray underline'>중복확인</span>
                </Row>
                <Row fieldWidth={192} field='비밀번호' required={true}>
                    <Input name='pw' value={userInput.pw} width='264px' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field='비밀번호 확인' required={true}>
                    <Input name='pwConfirm' value={userInput.pwConfirm} width='264px' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field='성별' required={true}>
                    <CheckBox label='여성' value={userInput.female} name='female' onCheckChanged={onCheckChanged} labelStyle={{fontSize: '16px'}}/>
                    <Space space='42px'/>
                    <CheckBox label='남성' value={userInput.male} name='male' onCheckChanged={onCheckChanged} labelStyle={{fontSize: '16px'}}/>
                </Row>
                <Row fieldWidth={192} field='나이 / 선호지역' required={true}>
                    <Combobox items={test_age} onSelected={onSelected} name='age' height={50} width={160}/>
                    <Space space='24px'/>
                    <Combobox items={test_place} onSelected={onSelected} name='place' height={50} width={160}/>
                </Row>
                <Row fieldWidth={192} field='E-mail' required={true}>
                    <Input name='email' value={userInput.email} width='160px' onChange={onChange}/>
                    <Space space='24px'>@</Space>
                    <Combobox items={test_mail} onSelected={onSelected} name='mail' height={50} width={160}/>
                </Row>
                <Row fieldWidth={192} field='주소' required={true}>
                    <Input name='addr1' value={userInput.addr1} width='160px' onChange={onChange}/>
                    <Space space='24px'/>
                    <button className='btn' onClick={onSearchAddress}>우편번호 검색</button>
                </Row>
                <Row fieldWidth={192} field=''>
                    <Input name='addr2' value={userInput.addr2} width='350px' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field=''>
                    <Input name='addr3' value={userInput.addr3} width='350px' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field='전화번호' required={true}>
                    <span className='gray'>010 - </span>
                    <Input name='phone' value={userInput.phone} width='160px' onChange={onChange} customStyle={{margin: '0 24px'}}/>
                    <button className='btn' onClick={onAuthenticate}>인증</button>
                </Row>
            </Form>
            <div className='warn-box'>

            </div>
            <button onClick={onClickSignUp}>가입하기</button>
        </div>
    );
}

export default SignUp;