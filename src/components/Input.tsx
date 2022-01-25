import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import CSS from 'csstype';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, name?: string)=>void
    value: string
    placeholder?: string
    name?: string
    width?: string
    customStyle?: CSS.Properties
}

function Input({onChange, value, placeholder, name, width='100%', customStyle}: Props){
    const style = css`
        width: ${width};
        height: 50px;
        padding: 15px 18px;
        font-size: 16px;
        border: 1px solid var(--color-gray);
    `;
    
    return (
        <input 
            css={style}
            style={customStyle}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>)=> onChange(event, name)}
            autoComplete='off'
        />
    );
}

export default Input;