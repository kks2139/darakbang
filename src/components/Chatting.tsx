import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useLocation } from 'react-router-dom';
import {ChattingList, ChattingToolbar, ChattingInput, Form, FormRow, CheckBox, Combobox} from './index';
import {ChattingMessage, ComboboxItem} from '../util/interfaces';

interface Params {
    teamId: number
}

interface Visible {
    showForm: boolean
    showMap: boolean
    showPicture: boolean
    overTop: number
}

interface Inputs {
    isOnline: boolean
    nextDate: string[]
    fee: number
    place: string
    description: string
    isFree: boolean
}

function Chatting(){
    // 테스트용 데이터
    const [testData, setTestData] = useState<ChattingMessage[]>([
        {userId: 'me', userName: '광선', time:'20211221222630', message: '고생하셨습니다~'},
        {userId: 'me', userName: '광선', time:'20211221222630', message: '다음 오프라인 공지까지 건강하십시오~'},
        {userId: 'a', userName: '양파', time:'20211221222730', message: '고생하셨습니다~'},
        {userId: 'a', userName: '양파', time:'20211221222730', message: '이제는 우리가 헤어져야 할 시간 다음에 또 만나요~ 라라라랄'},
        {userId: 'b', userName: '감자', time:'20211221222830', message: '고생하셨습니다~'},
        {userId: 'b', userName: '감자', time:'20211221222830', message: '다음 오프라인 공지까지 건강하십시오~'},
        {userId: 'b', userName: '감자', time:'20211221222830', message: '다음 오프라인 공지까지 건강하십시오~'},
        {userId: 'b', userName: '감자', time:'20211221222930', message: '고생요~'},
    ]);
    const location = useLocation<Params>();
    const {teamId} = location.state;
    const [visible, setVisible] = useState<Visible>({
        showForm: false,
        showMap: false,
        showPicture: false,
        overTop: 0,
    });
    const [inputs, setInputs] = useState<Inputs>({
        isOnline: false,
        nextDate: [''],
        fee: 0,
        place: '',
        description: '',
        isFree: false
    });
    const [addCount, setAddCount] = useState(1);
    const months = new Array(12).fill(0).map((a,i) => ({label: i+1+'', value: i+1}));
    const dates = new Array(31).fill(0).map((a,i) => ({label: i+1+'', value: i+1}));
    const places = [
        {value: '0', label: '관악구'},
        {value: '0', label: '마포구'},
        {value: '0', label: '강서구'},
        {value: '0', label: '강남구'},
    ];


    const onSendMessage = (msg: string)=>{
        // 1. 입력한 메시지 서버로 전송
        // 2. ChattingList 에서 api 조회로 리렌더링

        // 테스트 데이터 set
        const dt = new Date();
        const time = dt.getFullYear() + dt.getMonth() + dt.getDate() + dt.getHours() + dt.getMinutes() + dt.getSeconds() + '';
        const newTestData = {userId: 'me', userName: '광선', time, message: msg}
        setTestData(testData.concat(newTestData));
    }

    const onToolbarClicked = (type: string, overTop: number)=>{
        setVisible({
            showForm: type === 'calendar' && !visible.showForm,
            showMap: type === 'spot' && !visible.showMap,
            showPicture: type === 'camera' && !visible.showPicture,
            overTop
        });
    }

    const onCheckChanged = (check: boolean)=>{
        setInputs({
            ...inputs,
            isOnline: check
        });
    }

    const onFreeCheckChanged = (check: boolean)=>{
        setInputs({
            ...inputs,
            isFree: check,
            fee: check ? 0 : inputs.fee
        });
    }

    const onFeeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const regex = /[^0-9]/g;
        const value = e.currentTarget.value.replace(regex, '');
        setInputs({
            ...inputs,
            fee: Number(value)
        });
    }
    
    const onDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setInputs({
            ...inputs,
            description: e.currentTarget.value
        });
    }

    const onAddClick = ()=>{
        setAddCount(pre => pre + 1);
    }

    const style = css`
        width: 848px;
        .title {
            font-weight: bold;
            font-size: 24px;
            margin-bottom: 24px;
        }
        > .wrapper {
            position: relative;
            border: 1px solid var(--color-dim-gray);
            border-radius: 5px;
            overflow: hidden;
            > .form-box {
                position: absolute;
                top: ${visible.overTop}px;
                left: 0;
                transform: translateY(calc(-100% + 1px));
                width: 100%;
                .date-box {
                    .dates {
                        display: flex;
                        font-size: 18px;
                        font-weight: bold;
                        margin: 8px 0;
                    }
                }
                img.add {
                    width: 24px;
                    object-fit: contain;
                    cursor: pointer;
                    margin-left: 15px;
                }
                .fee {
                    color: var(--color-gray);
                    font-size: 24px;
                    width: 150px;
                }
                .desc {
                    width: 100%;
                    height: 90px;
                    font-size: 16px;
                    font-weight: bold;
                    border: 1px solid var(--color-dim-gray);
                    padding: 10px;
                    &::placeholder {
                        color: var(--color-dim-gray);
                    }
                }
            }
            .modal {
                position: absolute;
                background-color: rgb(0,0,0,0.4);
                transform: translateY(calc(-100%));
                top: ${visible.overTop}px;
                width: 100%;
                height: 100%;
            }
            .flex-box {
                display: flex;
                justify-content: space-evenly;
                width: calc(100% - 250px);
                font-size: 18px;
                font-weight: bold;
            }
            .font-gray {
                color: var(--color-gray);
            }
        }
    `;

    return (
        <div css={style}>
            <div className="title">팀 채팅</div>
            <div className='wrapper'>
                <ChattingList testData={testData}/>
                <ChattingToolbar onToolbarClicked={onToolbarClicked}/>
                <ChattingInput onSendMessage={onSendMessage}/>
                {visible.showForm || visible.showMap || visible.showPicture ? <div className='modal'></div> : null}
                {visible.showForm && 
                    <div className='form-box'>
                        <Form>
                            <FormRow title='온/오프라인' required={true}>
                                <div className='flex-box'>
                                    <CheckBox value={inputs.isOnline} label='온라인' name='online' onCheckChanged={onCheckChanged}/>
                                    <CheckBox value={!inputs.isOnline} label='오프라인' name='offline' onCheckChanged={onCheckChanged}/>
                                </div>
                            </FormRow>
                            <FormRow title='모임 날짜' required={true}>
                                <div className='date-box'>
                                    {new Array(addCount).fill(1).map((_, i, arr) => (
                                        <div key={i} className='dates'>
                                            <span className='font-gray'>{new Date().getFullYear()}</span>
                                            <Combobox items={months} text='월' width={100} itemStyle={{textAlign: 'right'}}/>
                                            <Combobox items={dates} text='일' width={100} itemStyle={{textAlign: 'right'}}/>
                                            <Combobox items={dates} text='분' width={100} itemStyle={{textAlign: 'right'}}/>
                                            {arr.length === i + 1 && <img className='add' src='/add.png' alt='add' onClick={onAddClick}></img>}
                                        </div>
                                    ))}
                                </div>
                            </FormRow>
                            <FormRow title='회비' required={true}>
                                <input className='fee' value={inputs.fee.toLocaleString()} onChange={onFeeChange}/>
                                <CheckBox value={inputs.isFree} label='없음' name='fee' onCheckChanged={onFreeCheckChanged}/>
                            </FormRow>
                            <FormRow title='지역' required={true}>
                                <Combobox items={places} width={200} itemStyle={{textAlign: 'center'}}/>
                            </FormRow>
                            <FormRow title='내용' required={true}>
                                <textarea className='desc' placeholder='활동 목적과 설명을 해주면 참여율을 높일 수 있어요!' value={inputs.description} onChange={onDescChange}></textarea>
                            </FormRow>
                        </Form>
                    </div>
                }
            </div>
        </div>
    );
}

export default Chatting;