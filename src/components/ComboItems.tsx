import React, {useState, useRef, useEffect} from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {
    width: number
    top: number
    left: number
    defaultValue?: string
    children: JSX.Element | JSX.Element[]
    visibleItemSize: number
}

function ComboItems({width, top, left, defaultValue, children, visibleItemSize}: Props){
    const divRef = useRef<HTMLUListElement | null>(null);
    const [itemHeight, setItemHeight] = useState(0);

    const HeightSetting = ()=>{
        const length = Array.isArray(children) ? children.length : 1;
        const size = visibleItemSize <= length ? visibleItemSize : length;
        setItemHeight(52 * (size) + 2);
    }

    useEffect(()=>{
        HeightSetting();
    }, []);

    const style = css`
        z-index: 999;
        position: absolute;
        width: ${width}px;
        top: ${top}px;
        left: ${left}px;
        height: 0;
        overflow: auto;
        transform: translateY(15px);
        border: 1px solid black;
        transition: height .2s ease;
        cursor: pointer;

        .empty {
            color: var(--color-gray);
        }
        

        &.show {
            height: ${itemHeight}px;
        }

        &.hide {
            height: 0;
        }
    `;

    return (
        <ul ref={divRef} css={style} data-combo-items>
            {children}
        </ul>
    );
}

export default ComboItems;