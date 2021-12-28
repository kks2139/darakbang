import React, {useState, useRef, useEffect} from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {SelectedCombo, ComboboxItem} from '../util/interfaces';
import CSS from 'csstype';
import {ComboValue, ComboItems, ComboItem, Overlay} from './index';
import ReactDom from 'react-dom';

interface Param {
    value: string | number
    label: string
}

interface Props {
    defaultValue?: string
    items: ComboboxItem[]
    onSelected?: (arg: SelectedCombo | null)=> void
    placeholder?: string
    name?: string
    required?: boolean
    readOnly?: boolean
    comboboxStyle?: CSS.Properties
    itemStyle?: CSS.Properties
}

function Combobox({defaultValue, items, onSelected, placeholder='전체', name='', required=false, readOnly=false, comboboxStyle, itemStyle}: Props){
    const [showItems, setShowItems] = useState(false);
    const [selected, setSelected] = useState<ComboboxItem | null>(null);
    const defaultItem: ComboboxItem[] = [{value: 'none', label: '선택 안함'}];
    const itemList = defaultItem.concat(items);
    const divRef = useRef<HTMLDivElement | null>(null);
    const pos = {
        top: divRef.current ? divRef.current.getBoundingClientRect().top + window.scrollY : 0,
        left: divRef.current ? divRef.current.getBoundingClientRect().left + window.scrollX : 0
    }

    const onFocus = ()=>{
        if(readOnly) return;
        setShowItems(true);
    }
    
    const onBlur = ()=>{
        if(readOnly) return;
        setShowItems(false);
    }

    const onClickComboItem = (arg: Param)=>{
        const selectedValue = arg.value === 'none' ? null : arg
        setSelected(selectedValue);
        setShowItems(false);
    }

    const style = css`
        width: 120px;
        .wrapper {
            z-index: 99;
            height: 28px;
        }
    `;

    return (
        <div css={style} style={comboboxStyle} ref={divRef} data-combo>
            <div className='wrapper'>
                <ComboValue 
                    itemStyle={itemStyle} 
                    required={required} 
                    readOnly={readOnly} 
                    placeholder={placeholder} 
                    selected={selected} 
                    onFocus={onFocus}
                    onBlur={onBlur}/>
            </div>
            {ReactDom.createPortal(
                <>
                    {showItems &&
                    <ComboItems width={120} top={pos.top} left={pos.left} show={showItems}>
                        {itemList.map(item => (
                            <ComboItem key={item.value} value={item.value} label={item.label} onClickComboItem={onClickComboItem}/>
                        ))}
                    </ComboItems>} 
                </>,
                document.querySelector('#modal-root')!
            )}
        </div>
    );
}

export default Combobox;