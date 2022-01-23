import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {Input, Form, SignUpFormInputs as Row, CheckBox, Space, Combobox} from '../index';

const testComboItems = [
    {label: 'Test', value: ''},
    {label: 'Test', value: ''},
    {label: 'Test', value: ''},
]

function SignUp(){
    const onChange = ()=>{

    }

    const onCheckChanged = ()=>{

    }

    const onSelected = ()=>{

    }

    const onSearchAddress = ()=>{

    }

    const onAuthenticate = ()=>{

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
    `;

    return (
        <div css={style}>
            <h2 className='title'>다락방 회원가입</h2>
            <Form width='unset'>
                <Row fieldWidth={192} field='이름' required={true}>
                    <Input value='123' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field='아이디' required={true}>
                    <Input value='123' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field='비밀번호' required={true}>
                    <Input value='123' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field='비밀번호 확인' required={true}>
                    <Input value='123' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field='성별' required={true}>
                    <CheckBox label='여성' onCheckChanged={onCheckChanged} labelStyle={{fontSize: '16px'}}/>
                    <Space space='42px'/>
                    <CheckBox label='남성' onCheckChanged={onCheckChanged} labelStyle={{fontSize: '16px'}}/>
                </Row>
                <Row fieldWidth={192} field='나이 / 선호지역' required={true}>
                    <Combobox items={testComboItems} onSelected={onSelected} name='age' height={50} width={160}/>
                    <Space space='24px'/>
                    <Combobox items={testComboItems} onSelected={onSelected} name='place' height={50} width={160}/>
                </Row>
                <Row fieldWidth={192} field='E-mail' required={true}>
                    <Input value='123' width='160px' onChange={onChange}/>
                    <Space space='24px'/>
                    <Combobox items={testComboItems} onSelected={onSelected} name='place' height={50} width={160}/>
                </Row>
                <Row fieldWidth={192} field='주소' required={true}>
                    <Input value='123' width='160px' onChange={onChange}/>
                    <Space space='24px'/>
                    <button onClick={onSearchAddress}>우편번호 검색</button>
                </Row>
                <Row fieldWidth={192} field=''>
                    <Input value='123' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field=''>
                    <Input value='123' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field='전화번호' required={true}>
                    <span>010</span>
                    <Input value='123' onChange={onChange}/>
                    <button onClick={onAuthenticate}>우편번호 검색</button>
                </Row>
            </Form>
        </div>
    );
}

export default SignUp;