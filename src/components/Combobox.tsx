import React, {useState} from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {ComboboxItem} from '../util/interfaces';

interface Props {
    items: ComboboxItem[]
    onComboChange: (arg: ComboboxItem)=> void
    defaultValue?: string
}

function Combobox({items, onComboChange, defaultValue}: Props){
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        const selected = items.filter(item => item.value === e.currentTarget.value)[0];
        onComboChange(selected);
    }

    return (
        <div css={style}>
            <select onChange={onChange} value={defaultValue}>
                {items.map(item => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </select>
        </div>
    );
}

const style = css`
`;

export default Combobox;