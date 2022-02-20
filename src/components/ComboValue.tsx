import React, {useState, useRef, useEffect} from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {ComboboxItem} from '../util/interfaces';
import CSS from 'csstype';
import {clearInvalid} from '../util/util';

interface Props {
    selected?: ComboboxItem | null
    required?: boolean
    readOnly?: boolean
    placeholder?: string
    onFocus: ()=> void
    onBlur: (param: React.FocusEvent<HTMLElement>)=> void
    itemStyle?: CSS.Properties
}

function ComboValue({selected, required=false, readOnly, placeholder='', onFocus, onBlur, itemStyle}: Props){
    const inputRef = useRef<HTMLInputElement>(null);
    const value = selected ? selected.label : '';

    useEffect(()=>{
        clearInvalid(inputRef.current!);
    }, [value]);

    useEffect(()=>{
        if(required){
            inputRef.current!.dataset.required = '';
        }else{
            delete inputRef.current!.dataset.required;
        }
    }, [required, value]);

    const style = css`
        display: flex;
        justify-content: ${readOnly ? 'center' : 'space-between'};
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        background-color: white;
        cursor: ${readOnly ? '' : 'pointer'};

        .value {
            width: 100%;
        }
        .icon-box {
            position: absolute;
            right: 8px;
        }
        input {
            text-align: center;
            font-size: 15px;
            width: 100%;
            height: 100%;
            border: 1px solid var(--color-gray);
            cursor: pointer;
            transition: .3s;
            &::placeholder {
                color: var(--color-gray);
                font-weight: 600;
                font-size: 15px;
                padding-right: 10px;
            }
        }

        input.invalid {
            position: relative;
            border-color: var(--color-warn) !important;
        }
    `;

    return (
        <div 
            css={style} 
            className={`${required ? 'red-star' : ''}`} 
            style={itemStyle} 
            tabIndex={-1} 
            onFocus={onFocus} 
            onBlur={(e: React.FocusEvent<HTMLElement>)=> {onBlur(e)}} 
            data-combo-value>
            <input className='value' ref={inputRef} value={value} placeholder={!selected ? placeholder : ''} readOnly/>
            {(selected || readOnly) ? null :
                <div className='icon-box'>
                    <img src='/comboDown.png'></img>
                </div>
            }
        </div>
    );
}

export default ComboValue;