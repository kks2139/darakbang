import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import { Notification } from "../../util/interfaces";
import {useHistory} from 'react-router-dom';
import {Overlay, Popup, Button, Accuse} from '../index';

interface Params {
    notification: Notification
}

const TEST_DATA = {
    teamName: '다락방',
    activeDate: '21.11.11 07:00',
    msg: `안녕하세요, 유빈님
    지난 활동에서 뵀던 다락방 팀장 주인장입니다.
    한 번 만남으로 함께 해 주셨는데, 가입하셔서 종종 함께 할 수 있으면 좋겠네요 ㅎㅎ`
}

function NotificationDetail(){
    const history = useHistory();
    const [accepted, setAccepted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const onClickButton = (e: React.MouseEvent<HTMLButtonElement>)=>{
        if(e.currentTarget.name === 'ok'){
            setAccepted(true);
        }else{
            history.goBack();
        }
    }

    const onClickCheckMyTeam = ()=>{
        history.push('/my-team/room/test');
    }

    const onClickCloseConfirm = ()=>{
        history.goBack();
    }

    const onClickAccuse = ()=>{
        setShowPopup(true);
    }

    const onClickSend = ()=>{
        history.push('/my-team');
    }
    
    const onPopupClose = ()=>{
        setShowPopup(false);
    }

    useEffect(()=>{
        // notification id로 상세내용 조회
    }, []);

    const style = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .title-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 50px;
            img {
                margin: 0 15px;
            }
        }
        
        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            h2 {
                font-size: 30px;
                line-height: 30px;

            }
        }
        
        .subtitle {
            color: white;
            font-size: 20px;
            margin-top: 10px;
        }

        .content-box {
            width: 900px;
            height: 460px;
            background-color: white;
            padding: 100px 40px 40px 40px;
            overflow: auto;
            .message {
                font-size: 20px;
                .line {
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid var(--color-dim-gray);
                    height: 40px;
                    &.last {
                        justify-content: flex-end;
                    }
                    &.date {
                        color: var(--color-gray);
                        font-size: 17px;
                        border: 0;
                    }
                    img {
                        margin-left: 10px;
                        cursor: pointer;
                    }
                }
            }
        }

        .btn-box {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 900px;
            margin-top: 20px;
            .text {
                color: white;
                font-size: 25px;
                font-weight: bold;
            }
            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: white;
                width: 145px;
                height: 56px;
                font-size: 24px;
                margin-left: 20px;
                border-radius: 30px;
                border: 2px solid var(--color-main-text);
                cursor: pointer;
            }
        }
    `;

    return (
        <>
            {accepted ? 
                <ConfirmLayout onClickCheckMyTeam={onClickCheckMyTeam} onClickCloseConfirm={onClickCloseConfirm}/> :
                <div css={style}>
                    <div className='title-box'>
                        <div className='title'>
                            <img src='/mail-1.png' alt='편지지'></img>
                            <h2>비밀 초대장</h2>
                            <img src='/tooltip.png' alt='물음표'></img>
                        </div>
                        <span className='subtitle'>다락방에서 초대장이 도착하였습니다.</span>
                    </div>
                    <div className='content-box'>
                        <div className='message'>
                            {TEST_DATA.msg.split('\n').map(line => (
                                <div className='line'>{line}</div>
                            ))}
                            <div className='line'/>
                            <div className='line last'>- {TEST_DATA.teamName} -</div>
                            <div className='line'/>
                            <div className='line last date'>
                            {TEST_DATA.activeDate} 일자 활동 후 보내진 편지입니다.
                                <img src='/report.png' alt='신고' onClick={onClickAccuse}></img>
                            </div>
                        </div>
                    </div>
                    <div className='btn-box'>
                        <div className='text'>초대를 수락 하시겠어요?</div>
                        <button className='btn' onClick={onClickButton} name='ok'>예</button>
                        <button className='btn' onClick={onClickButton}>아니요</button>
                    </div>
                    {showPopup &&
                        <Popup onPopupClose={onPopupClose}>
                            <Accuse onClickSend={onClickSend}/>
                        </Popup>
                    }
                </div>
            }
            <Overlay show={true} zIndex={-1} opacity={0.3}/>
        </>
    );
}

interface ConfirmProps {
    onClickCheckMyTeam: ()=>void
    onClickCloseConfirm: ()=>void
}

function ConfirmLayout({onClickCheckMyTeam, onClickCloseConfirm}: ConfirmProps){
    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 100px 20px 100px;
        height: 100%;
        h2 {
            color: white;
        }
        .close {
            color: white;
            margin: 100px 0 15px 0;
            font-weight: bold;
            font-size: 20px;
            background-color: transparent;
            transition: .2s;
            &:hover {
                transform: translateY(-2px);
                text-shadow: 0 3px 6px black;
            }
        }
    `;

    return (
        <div css={style}>
            <img src='/plane.png' alt='비행기 이미지'></img>
            <h2>초대에 수락하셨습니다.</h2>
            <h2>이제 다락방의 정식 회원이에요!</h2><br/>
            <h2>첫 인사는 어떻게 하실건가요? (*^▽^*)</h2>
            <button className='close' name='close' onClick={onClickCloseConfirm}>x 닫기</button>
            <Button text='팀 룸 가기' theme='yellow' onClick={onClickCheckMyTeam}/>
        </div>
    );
}

export default NotificationDetail;