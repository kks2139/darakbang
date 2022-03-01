import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import CSS from 'csstype';
import {clearInvalid} from '../util/util';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, name: string)=>void
    value: string | number
    placeholder?: string
    name?: string
    width?: string
    type?: string
    maxValue?: number
    minValue?: number
    required?: boolean
    disabled?: boolean
    noBorder?: boolean
    autoComplete?: 'on' | 'off'
    customStyle?: CSS.Properties
}

function Input({
    onChange, 
    value, 
    placeholder, 
    name, 
    width='100%', 
    type, 
    maxValue, 
    minValue, 
    required=false, 
    disabled=false, 
    noBorder=false, 
    autoComplete='off', 
    customStyle}: Props){
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(type === 'number'){
            const value = +e.currentTarget.value;
            if(isNaN(value)) return;
            if(minValue && minValue > value || maxValue && maxValue < value) return;
        }
        onChange(e, name || '');
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
        width: ${width};
        height: 50px;
        padding: 15px 18px;
        font-size: 16px;
        border: 1px solid var(--color-gray);
        transition: .3s;

        &:disabled {
            background-color: var(--color-light-gray);
        }
        
        &::placeholder {
            font-size: 15px;
            color: var(--color-gray);
        }

        &.invalid {
            position: relative;
            /* box-shadow: 0 0 7px -2px var(--color-warn); */
            border-color: var(--color-warn) !important;
        }
    `;

    return (
        <input 
            css={style}
            ref={inputRef}
            style={customStyle}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={changeHandler}
            disabled={disabled}
            autoComplete={autoComplete}
        />
    );
}

export default Input;