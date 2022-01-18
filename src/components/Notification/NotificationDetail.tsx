import React, { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import { Notification } from "../../util/interfaces";
import {useLocation, useRouteMatch, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {appActions} from '../../store/app';

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
        dispatch(appActions.setBackgroundColor('rgb(0.5,0.5,0.5,0.3)'));
        return ()=> {
            // dispatch(appActions.setBackgroundColor('white'));
        }
    }, []);

    const style = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .title {
            font-size: 36px;
            margin-bottom: 16px;
        }

        .subtitlt {
            color: white;
            font-size: 14px;
            margin-bottom: 125px;
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
            <h2 className='title'>비밀 초대장</h2>
            <span className='subtitle'>다락방에서 초대장이 도착하였습니다.</span>
            <div className='content-box'>
                <div className='content'>

                </div>
            </div>
        </div>
    );
}

export default NotificationDetail;