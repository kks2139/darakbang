import React, { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import { Notification } from "../../util/interfaces";
import {useLocation, useRouteMatch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Overlay} from '../index';

interface Params {
    notification: Notification
}

function NotificationDetail(){
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const location = useLocation<Params>();
    const {notification} = location.state;

    const onClickMenu = ()=>{

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
            margin-bottom: 80px;
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
            .content {

            }
        }
    `;

    return (
        <div css={style}>
            {/* {notification.title} */}
            <div className='title-box'>
                <div className='title'>
                    <img src='/mail-1.png'></img>
                    <h2>비밀 초대장</h2>
                    <img src='/tooltip.png'></img>
                </div>
                <span className='subtitle'>다락방에서 초대장이 도착하였습니다.</span>
            </div>
            <div className='content-box'>
                <div className='content'>

                </div>
            </div>
            <Overlay show={true} zIndex={-1} opacity={0.4}/>
        </div>
    );
}

export default NotificationDetail;