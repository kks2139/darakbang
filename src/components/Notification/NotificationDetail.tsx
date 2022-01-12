import React, { useEffect, useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import { Notification } from "../../util/interfaces";
import {useLocation, useRouteMatch, Link} from 'react-router-dom';

interface Params {
    notification: Notification
}

function NotificationDetail(){
    const match = useRouteMatch();
    const location = useLocation<Params>();
    const {notification} = location.state;

    const onClickMenu = ()=>{

    }

    useEffect(()=>{
        // notification id로 상세내용 조회
    }, []);

    const style = css`
    `;

    return (
        <div css={style}>
            {notification.title}
        </div>
    );
}

export default NotificationDetail;