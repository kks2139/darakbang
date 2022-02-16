import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { clearInvalid } from '../util/util';

interface Props {
    value: string
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>, name: string)=>void
    name?: string
    required?: boolean
}

function Textarea({value, onChange, name='', required=false}: Props){
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
        transition: .3s;
        &.invalid {
            position: relative;
            box-shadow: 0 0 7px -2px var(--color-warn), inset 0 0 0 1px var(--color-warn);
            border-color: var(--color-warn);
        }
    `;
    return(
        <textarea
            ref={taRef}
            css={style}
            onChange={changeHandler} 
            name={name} 
            value={value}>
        </textarea>
    );
}

export default Textarea;