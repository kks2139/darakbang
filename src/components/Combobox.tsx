import React, {useState, useRef, useEffect} from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {SelectedCombo, ComboboxItem} from '../util/interfaces';
import CSS from 'csstype';
import {ComboValue, ComboItems, ComboItem} from './index';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';

interface Param {
    value: string | number
    label: string
}

interface Props {
    defaultValue?: string
    items: ComboboxItem[]
    onSelected?: (param: SelectedCombo | null, name: string)=> void
    placeholder?: string
    width?: number
    height?: number
    name?: string
    required?: boolean
    readOnly?: boolean
    comboboxStyle?: CSS.Properties
    itemStyle?: CSS.Properties
    visibleItemSize?: number
}

function Combobox({
    defaultValue, 
    items,
    onSelected,
    placeholder='',
    width=120,
    height=30,
    name='',
    required=false,
    readOnly=false,
    comboboxStyle,
    itemStyle,
    visibleItemSize=6
}: Props){
    const [showItems, setShowItems] = useState(false);
    const [selected, setSelected] = useState<ComboboxItem | null>(null);
    const defaultItem: ComboboxItem[] = [{value: 'none', label: 'X'}];
    const itemList = defaultItem.concat(items);
    const divRef = useRef<HTMLDivElement | null>(null);
    const pos = {
        top: divRef.current ? divRef.current.getBoundingClientRect().top + window.scrollY + (height - 32) : 0,
        left: divRef.current ? divRef.current.getBoundingClientRect().left + window.scrollX : 0
    }

    const onFocus = ()=>{
        if(readOnly) return;
        setShowItems(true);
    }
    
    const onBlur = (e: React.FocusEvent<HTMLElement>)=>{
        if(readOnly) return;
        if(e.relatedTarget && e.relatedTarget instanceof HTMLLIElement && e.relatedTarget.dataset.comboItem) return;
        setShowItems(false);
    }

    const onClickComboItem = (item: Param)=>{
        const selectedValue = item.value === 'none' ? null : item
        const param = selectedValue ? {...selectedValue, name} : null;

        setSelected(selectedValue);
        setShowItems(false);
        if(onSelected) {
            onSelected(param, name);
        }
    }

    const style = css`
        display: flex;
        align-items: center;
        border: 1px solid var(--color-gray);
        width: ${width}px;
        height: ${height}px;
    `;

    return (
        <div css={style} style={comboboxStyle} ref={divRef} data-combo>
            <ComboValue 
                itemStyle={itemStyle} 
                required={required} 
                readOnly={readOnly} 
                placeholder={placeholder} 
                selected={selected} 
                onFocus={onFocus}
                onBlur={onBlur}/>
            {ReactDOM.createPortal(
                <CSSTransition
                    in={showItems}
                    unmountOnExit
                    timeout={200}
                    classNames={{
                        enterActive: 'show',
                        enterDone: 'show',
                        exitActive: 'hide'
                    }}>
                    <ComboItems width={width} top={pos.top} left={pos.left} visibleItemSize={visibleItemSize}>
                        {itemList.map(item => (
                            <ComboItem key={item.value} value={item.value} label={item.label} onClickComboItem={onClickComboItem}/>
                        ))}
                    </ComboItems> 
                </CSSTransition>,
                document.querySelector('#modal-root')!
            )}
        </div>
    );
}

export default Combobox;