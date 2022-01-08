import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {Combobox} from '../index';
import {SelectedCombo} from '../../util/interfaces';
import CSS from 'csstype';

interface Props {
    onAddDate: ()=> void
}

function AddDate({onAddDate}: Props){
    const items = [
        {value: 1, label: '1'},
        {value: 2, label: '2'},
        {value: 3, label: '3'},
    ];
    const itemStyle: CSS.Properties = {
        fontWeight: 'bold',
        textAlign: 'center'
    };

    const onSelected = (selected: SelectedCombo | null)=>{

    }

    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 520px;
        > .content {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .btn {
            padding: 16px 30px;
            border: 1px solid black;
            border-radius: 25px;
            background-color: var(--color-main-text);
            color: white;
            font-size: 24px;
            margin: 30px 0;
            transition: .2s;
            cursor: pointer;
            &:hover {
                box-shadow: 0 0 0 1px black;
            }
        }
    `;

    return (
        <div css={style}>
            <div className='content'>
                <Combobox items={items} onSelected={onSelected} itemStyle={itemStyle}/>월
                <Combobox items={items} onSelected={onSelected} itemStyle={itemStyle}/>일
                <Combobox items={items} onSelected={onSelected} itemStyle={itemStyle}/>분
            </div>
            <button className='btn'>추가</button>
        </div>
    );
}

export default AddDate;