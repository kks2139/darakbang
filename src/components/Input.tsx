import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import CSS from 'csstype';
import {clearInvalid} from '../util/util';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, name?: string)=>void
    value: string
    placeholder?: string
    name?: string
    width?: string
    required?: boolean
    noBorder?: boolean
    customStyle?: CSS.Properties
}

function Input({onChange, value, placeholder, name, width='100%', required=false, noBorder=false, customStyle}: Props){
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        onChange(e, name);
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
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={changeHandler}
            autoComplete='off'
        />
    );
}

export default Input;