import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useLocation } from 'react-router-dom';
import {} from './index';

interface Props {
    onToolbarClicked?: (p1: string, p2: number)=> void
}

function ChattingToolbar({onToolbarClicked}: Props){
    const divRef = useRef<HTMLDivElement | null>(null);

    const onClick = (e: React.MouseEvent<HTMLElement>)=>{
        const targ = e.target;
        if(targ instanceof HTMLImageElement && targ.closest('[data-imgbox]')){
            const {name} = targ.dataset;
            if(onToolbarClicked) onToolbarClicked(name || '', divRef.current!.offsetTop);
        }
    }

    const style = css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 46px;
        border-top: 1px solid var(--color-dim-gray); 
        border-bottom: 1px solid var(--color-dim-gray); 
        background-color: var(--color-bg-gray);
        padding: 0 25px;
        img {
            cursor: pointer;
        }
        .img-box {
            display: flex;
            align-items: center;
            img {
                &:not(:last-child) {
                    margin-right: 15px; 
                }
            }
        }
    `;

    return (
        <div css={style} ref={divRef} onClick={onClick}>
            <div className='img-box' data-imgbox>
                {/* <img src='/camera.png' data-name='camera'></img> */}
                <img src='/spot.png' data-name='spot'></img>
            </div>
            <div className='img-box' data-imgbox>
                <img src='/calendar.png' data-name='calendar'></img>
            </div>
        </div>
    );
}

export default ChattingToolbar;