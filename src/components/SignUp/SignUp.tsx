import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {Input, Form, SignUpFormInputs as Row, CheckBox, Space, Combobox, Button} from '../index';
import {validateInputs} from '../../util/util';
import {useHistory} from 'react-router-dom';

const test_age = [
    {label: '25', value: 'a1'},
    {label: '26', value: 'a2'},
    {label: '27', value: 'a3'},
];
const test_place = [
    {label: '강남', value: 'p1'},
    {label: '강북', value: 'p2'},
    {label: '강동', value: 'p3'},
];
const test_mail = [
    {label: 'naver.com', value: 'm1'},
    {label: 'gmail.com', value: 'm2'},
];

function SignUp(){
    const history = useHistory();
    const divRef = useRef<HTMLDivElement>(null);
    const [userInput, setUserInput] = useState({
        name: '',
        nickname: '',
        id: '',
        pw: '',
        pwConfirm: '',
        male: false,
        female: true,
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
    
    const onClickSignUp = (e: React.MouseEvent)=>{
        if(!validateInputs(divRef.current!)) return;
        history.push('/welcome');
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
            box-shadow: inset 0 0 0 2px var(--color-main-text);
            font-size: 16px;
            font-weight: bold;
            padding: 0 25px;
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
        .warn-box {
            margin: 40px 0;
        }
    `;

    return (
        <div css={style} ref={divRef}>
            <h2 className='title'>다락방 회원가입</h2>
            <Form width='650px'>
                <Row fieldWidth={192} field='이름' required>
                    <Input name='name' value={userInput.name} width='265px' onChange={onChange} required/>
                </Row>
                <Row fieldWidth={192} field='아이디' required>
                    <Input name='id' value={userInput.id} width='265px' placeholder='영문 + 숫자' onChange={onChange} required/>
                    <span className='gray underline'>중복확인</span>
                </Row>
                <Row fieldWidth={192} field='비밀번호' required>
                    <Input name='pw' value={userInput.pw} width='265px' placeholder='영문 + 숫자 특수문자(12자 내외)' onChange={onChange} required/>
                </Row>
                <Row fieldWidth={192} field='비밀번호 확인' required>
                    <Input name='pwConfirm' value={userInput.pwConfirm} width='265px' onChange={onChange} required/>
                </Row>
                <Row fieldWidth={192} field='성별' required>
                    <CheckBox label='여성' value={userInput.female} name='female' onCheckChanged={onCheckChanged} labelStyle={{fontSize: '16px'}}/>
                    <Space space='42px'/>
                    <CheckBox label='남성' value={userInput.male} name='male' onCheckChanged={onCheckChanged} labelStyle={{fontSize: '16px'}}/>
                </Row>
                <Row fieldWidth={192} field='나이 / 선호지역' required>
                    <Combobox items={test_age} onSelected={onSelected} name='age' height={50} width={160} required/>
                    <Space space='24px'/>
                    <Combobox items={test_place} onSelected={onSelected} name='place' height={50} width={160} required/>
                </Row>
                <Row fieldWidth={192} field='E-mail' required>
                    <Input name='email' value={userInput.email} width='160px' onChange={onChange} required/>
                    <Space space='24px'>@</Space>
                    <Combobox items={test_mail} onSelected={onSelected} name='mail' height={50} width={160} required/>
                </Row>
                <Row fieldWidth={192} field='주소' required>
                    <Input name='addr1' value={userInput.addr1} width='160px' onChange={onChange} required/>
                    <Space space='24px'/>
                    <button className='btn' onClick={onSearchAddress} style={{width: '160px'}}>우편번호 검색</button>
                </Row>
                <Row fieldWidth={192} field=''>
                    <Input name='addr2' value={userInput.addr2} width='345px' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field=''>
                    <Input name='addr3' value={userInput.addr3} width='345px' onChange={onChange}/>
                </Row>
                <Row fieldWidth={192} field='전화번호' required>
                    <span className='gray'>010 - </span>
                    <Input name='phone' value={userInput.phone} width='187px' onChange={onChange} required customStyle={{margin: '0 20px'}}/>
                    <button className='btn' onClick={onAuthenticate}>인증</button>
                </Row>
            </Form>
            <div className='warn-box'>

            </div>
            <Button theme='blue_2' onClick={onClickSignUp} text='가입하기' styles={{width: '200px', marginBottom: '200px'}}></Button>
        </div>
    );
}

export default SignUp;