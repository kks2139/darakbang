import React, {useState, useRef, useEffect} from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {ComboboxItem} from '../util/interfaces';
import {ComboItem} from './index';

interface Props {
    width: number
    top: number
    left: number
    defaultValue?: string
    show: boolean
    children: JSX.Element | JSX.Element[]
}

function ComboItems({width, top, left, defaultValue, show, children}: Props){
    const divRef = useRef<HTMLUListElement | null>(null);
    const [itemHeight, setItemHeight] = useState(0);

    const HeightSetting = ()=>{
        const length = Array.isArray(children) ? children.length : 1;
        setItemHeight(52 * (length) + 2);
        if(defaultValue){

        }
    }

    useEffect(()=>{
        HeightSetting();
    }, []);

    const style = css`
        z-index: 2;
        position: absolute;
        width: ${width}px;
        top: ${top}px;
        left: ${left}px;
        height: 0px;
        overflow: hidden;
        transform: translateY(15px);
        border: 1px solid black;
        transition: .2s;
        .empty {
            color: var(--color-gray);
        }
        ${show ? `
            cursor: pointer;
            // transform: translateY(-16px);
            height: ${itemHeight}px;
            opacity: 1;
        ` : ''}
    `;

    return (
        <ul ref={divRef} css={style} data-combo-items data-show={show}>
            {children}
        </ul>
    );
}

export default ComboItems;