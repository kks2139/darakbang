import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {Combobox, Button} from '../index';
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
    `;

    return (
        <div css={style}>
            <div className='content'>
                <Combobox items={items} onSelected={onSelected} itemStyle={itemStyle}/>월
                <Combobox items={items} onSelected={onSelected} itemStyle={itemStyle}/>일
                <Combobox items={items} onSelected={onSelected} itemStyle={itemStyle}/>분
            </div>
            <Button text='추가' styles={{margin: '20px 0'}}/>
        </div>
    );
}

export default AddDate;