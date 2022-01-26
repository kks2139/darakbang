import React, { useRef, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import CSS from 'csstype';
import { clearInvalid } from '../util/util';

interface Props {
    value?: boolean 
    label?: string 
    name?: string
    required?: boolean
    labelStyle?: CSS.Properties
    boxStyle?: CSS.Properties
    onCheckChanged: (value: boolean, name: string | undefined)=> void
}

function CheckBox({value=false, label='', name, required=false, boxStyle, labelStyle, onCheckChanged}: Props){
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = ()=>{
        onCheckChanged(!value, name);
        clearInvalid(inputRef.current!);
    }

    useEffect(()=>{
        if(required){
            inputRef.current!.dataset.required = '';
        }else{
            delete inputRef.current!.dataset.required;
        }
    }, [required]);

    const style = css`
        display: flex;
        align-items: center;
        .box {
            width: 20px;
            height: 20px;
            border: 1px solid black;
            background-color: white;
            transition: .1s;
            cursor: pointer;
            ${value && `
                background-color: var(--color-main-text);
            `}
        }
        .label {
            font-size: 20px;
            font-weight: bold;
            margin-left: 8px;
            cursor: pointer;
        }

        > input.invalid {
            position: relative;
            box-shadow: 0 0 7px -2px var(--color-warn);
            border-color: var(--color-warn);
        }
    `;

    return (
        <div css={style} onClick={onClick}>
            <input className='box' style={boxStyle} readOnly ref={inputRef}></input>
            <div className='label' style={labelStyle}>{label}</div>
        </div>
    );
}

export default CheckBox;