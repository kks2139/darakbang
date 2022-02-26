import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { clearInvalid } from '../util/util';
import CSS from 'csstype';

interface Props {
    value: string
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>, name: string)=>void
    name?: string
    placeholder?: string
    required?: boolean
    customStyle?: CSS.Properties
}

function Textarea({value, onChange, name='', placeholder='', required=false, customStyle}: Props){
    const taRef = useRef<HTMLTextAreaElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        onChange(e, name);
        clearInvalid(taRef.current!);
    }

    useEffect(()=>{
        if(required) taRef.current!.dataset.required = ''; 
        else delete taRef.current!.dataset.required;
    },[required]);

    const style = css`
        font-size: 16px;
        border: 1px solid var(--color-light-gray);
        transition: .3s;

        &::placeholder {
            color: var(--color-gray);
        }

        &.invalid {
            position: relative;
            border-color: var(--color-warn);
        }
    `;
    return(
        <textarea
            css={style}
            style={customStyle}
            ref={taRef}
            onChange={changeHandler} 
            name={name} 
            placeholder={placeholder} 
            value={value}>
        </textarea>
    );
}

export default Textarea;