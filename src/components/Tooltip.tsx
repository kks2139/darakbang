import React, { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import ReactDOM from 'react-dom';

interface Props {
    children: JSX.Element | JSX.Element[]
    text: string
}

function Tooltip({children, text}: Props){
    const tooltipRef = useRef<HTMLDivElement>(null);
    const tooltipWidth = 150;

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>)=>{
        const {pageX, pageY} = e;
        const {top, left} = e.currentTarget.getBoundingClientRect();
        const x = pageX - left - (tooltipWidth / 2);
        const y = pageY - top;

        tooltipRef.current!.style.left = x + 'px';
        tooltipRef.current!.style.top = y + 'px';
    }

    const style = css`
        position: relative;

        &:hover {
            .tooltip {
                display: flex;
            }
        }

        .tooltip {
            display: none;
            position: absolute;
            top: 0;
            padding: 8px 10px;
            transform: translateY(55%);
            background-color: white;
            color: black;
            border: 1px solid black;
            font-size: 13px;
            width: ${tooltipWidth}px;
            text-align: left;
        }
    `;

    return (
        <div css={style} onMouseMove={onMouseMove}>
            {children}
            <div className='tooltip'  ref={tooltipRef}>
                {text}
            </div>
        </div>
    );
}

export default Tooltip;