import React, {useState, useRef, useEffect} from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {ComboboxItem} from '../util/interfaces';
import CSS from 'csstype';

interface Props {
    selected?: ComboboxItem | null
    required?: boolean
    readOnly?: boolean
    placeholder?: string
    onFocus: ()=> void
    onBlur: (param: React.FocusEvent<HTMLElement>)=> void
    itemStyle?: CSS.Properties
    text?: string
}

function ComboValue({selected, required, readOnly, placeholder, onFocus, onBlur, itemStyle, text=''}: Props){
    const style = css`
        display: flex;
        justify-content: ${readOnly ? 'center' : 'space-between'};
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        padding: 0 10px;
        background-color: white;
        cursor: ${readOnly ? '' : 'pointer'};

        .value {
            width: 100%;
        }
        .placehoder {
            color: var(--color-gray);
            font-weight: 600;
            font-size: 18px;
        }
        .icon-box {
            position: absolute;
            right: 5px;
        }
        .text {
            margin-left: 5px;
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
            {selected ? 
                <div className='value'>{selected.label}</div> :
                <div className='placehoder'>{placeholder}</div>
            }
            {(selected || readOnly) ? null :
                <div className='icon-box'>
                    <img src='/comboDown.png'></img>
                </div>
            }
            <span className='text'>
                {text}
            </span>
        </div>
    );
}

export default ComboValue;