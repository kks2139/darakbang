import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useLocation } from 'react-router-dom';
import {ChattingList, ChattingToolbar, ChattingInput, ChattingSchedule} from './index';
import {ChattingMessage, ChattingScheduleInputs} from '../util/interfaces';

interface Params {
    teamId: number
}

interface Visible {
    showForm: boolean
    showMap: boolean
    showPicture: boolean
    inputReadOnly: boolean
    inputDone: boolean
    overTop: number
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
    const [scheduleInput, setScheduleInput] = useState<ChattingScheduleInputs | null>(null); 
    const [visible, setVisible] = useState<Visible>({
        showForm: false,
        showMap: false,
        showPicture: false,
        inputReadOnly: false,
        inputDone: false,
        overTop: 0
    });

    const onSendMessage = (msg: string)=>{
        // 1. 입력한 메시지 서버로 전송
        // 2. ChattingList 에서 api 조회로 리렌더링

        if(visible.inputDone){
            sendSchedule();
        }else{
            sendMessage(msg);
        }
    }
    
    const sendMessage = (msg: string)=>{
        // 테스트 데이터 set
        const dt = new Date();
        const time = dt.getFullYear() + dt.getMonth() + dt.getDate() + dt.getHours() + dt.getMinutes() + dt.getSeconds() + '';
        const newTestData = {userId: 'me', userName: '광선', time, message: msg}
        setTestData(testData.concat(newTestData));
    }

    const sendSchedule = ()=>{
        const {isOnline, month, date, time, place, isFree, fee, description} = scheduleInput!;
        const msg = `${isOnline ? '온라인' : '오프라인'}활동 공지
        ${month}월 ${date}일 ${time}분
        ${place}
        회비 ${isFree ? '없음' : fee}
        ${description}`;
        sendMessage(msg);
        setScheduleInput(null);
        setVisible({
            ...visible,
            showForm: false,
            inputDone: false,
        });
    }

    const onToolbarClicked = (type: string, overTop: number)=>{
        setVisible({
            showForm: type === 'calendar' && !visible.showForm,
            showMap: type === 'spot' && !visible.showMap,
            showPicture: type === 'camera' && !visible.showPicture,
            inputReadOnly: !visible.inputReadOnly,
            inputDone: false,
            overTop
        });
    }

    const onInputComplete = (inputs: ChattingScheduleInputs)=>{
        setVisible({
            ...visible,
            inputDone: true,
            inputReadOnly: false
        });
        setScheduleInput(inputs);
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
                <ChattingInput readOnly={visible.inputReadOnly} onSendMessage={onSendMessage}/>
                {visible.showForm || visible.showMap || visible.showPicture ? <div className='modal'></div> : null}
                {visible.showForm && 
                    <ChattingSchedule overTop={visible.overTop} onInputComplete={onInputComplete}/>
                }
            </div>
        </div>
    );
}

export default Chatting;