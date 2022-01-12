import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {useDispatch} from 'react-redux';
import {popToast} from '../store/app';
import {CSSTransition} from 'react-transition-group';

interface Props {
    msg: string
}

function ToastMessage({msg=''}){
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    
    useEffect(()=>{
        dispatch(popToast());
    }, []);

    const style = css`
        z-index: 999;
        position: fixed;
        top: 150px;
        left: 50%;
        color: var(--color-peach);
        border: 2px solid var(--color-peach);
        border-radius: 5px;
        padding: 26px 40px;
        font-size: 16px;
        line-height: 25px;
        background-color: white;
        white-space: break-spaces;

        animation-name: toggle;
        animation-duration: 2.5s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        
        @keyframes toggle {
            0% {
                transform: translate(-50%, -30px);
                opacity: 0;
            }
            20% {
                transform: translate(-50%, 0);
                opacity: 1;
            }
            80% {
                transform: translate(-50%, 0);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -30px);
                opacity: 0;
            }
        }
    `;

    return (
        <div css={style} className='text'>
            {msg}
        </div>
    );
}

export default ToastMessage;