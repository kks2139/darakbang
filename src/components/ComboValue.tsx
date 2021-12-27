import React, {useState, useRef, useEffect} from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {ComboboxItem} from '../util/interfaces';
import CSS from 'csstype';

interface Props {
    selected?: ComboboxItem | null
    required?: boolean
    readOnly?: boolean
    placeholder?: string
    onClickValue: ()=> void
    itemStyle?: CSS.Properties
}

function ComboValue({selected, required, readOnly, placeholder, onClickValue, itemStyle}: Props){

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
    `;

    return (
        <div css={style} className={`${required ? 'red-star' : ''}`} style={itemStyle} data-combo-value onClick={onClickValue}>
            {selected ? 
                <div className='value'>{selected.label}</div> :
                <div className='placehoder'>{placeholder}</div>
            }
            {readOnly ? null :
                <div className='icon-box'>
                    <img src='/comboDown.png'></img>
                </div>
            }
        </div>
    );
}

export default ComboValue;