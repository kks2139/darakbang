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
    showLength?: boolean
    maxLength?: number
    customStyle?: CSS.Properties
}

function Textarea({value, onChange, name='', placeholder='', required=false, showLength=false, maxLength, customStyle}: Props){
    const taRef = useRef<HTMLTextAreaElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        if(maxLength && e.currentTarget.value.length > maxLength) return;
        onChange(e, name);
        clearInvalid(taRef.current!);
    }

    useEffect(()=>{
        if(required) taRef.current!.dataset.required = ''; 
        else delete taRef.current!.dataset.required;
    },[required]);

    const style = css`
        position: relative;
        textarea {
            transition: .3s;
            padding: 10px;
            border: 1px solid var(--color-light-gray);
            font-size: 17px;
            font-weight: bold;
            width: 100%;
            height: 100%;
            
            &::placeholder {
                color: var(--color-dim-gray);
            }
        }


        &.invalid {
            position: relative;
            border-color: var(--color-warn);
        }

        .length {
            position: absolute;
            bottom: 10px;
            right: 10px;
            font-size: 13px;
            font-weight: normal;
            color: var(--color-dim-gray);
        }
    `;
    return(
        <div css={style} style={customStyle}>
            <textarea
                ref={taRef}
                onChange={changeHandler} 
                name={name} 
                placeholder={placeholder} 
                value={value}>
            </textarea>
            {showLength && <span className='length'>{`${value.length} ${maxLength ? ` / ${maxLength}` : ''} 자`}</span>}
        </div>
    );
}

export default Textarea;