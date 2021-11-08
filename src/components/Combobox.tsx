import React, {useState, useRef, useEffect} from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {SelectedCombo} from '../util/interfaces';

interface Style {
    width?: string
    height?: string
    margin?: string
    border?: string
    transform?: string
}

interface ComboboxItem {
    label: string
    value: string
}

interface Props {
    defaultValue?: string
    items: ComboboxItem[]
    onSelected?: (arg: SelectedCombo | null)=> void
    placeholder?: string
    name?: string
    required?: boolean
    readOnly?: boolean
    styles?: Style
}

function Combobox({defaultValue, items, onSelected, placeholder='전체', name='', required=false, readOnly=false, styles}: Props){
    const [itemHeight, setItemHeight] = useState(0);
    const [selected, setSelected] = useState<ComboboxItem | null>(null);
    const divRef = useRef<HTMLDivElement | null>(null);

    const onClickBox = (e: React.MouseEvent<HTMLDivElement>)=>{
        if(readOnly) return;
        toggleItems(e);
    }

    const onClickItems = (e: React.MouseEvent<HTMLDivElement>)=>{
        const box = e.currentTarget;
        const item = e.target;

        if(item instanceof HTMLDivElement && item.classList.contains('item')){
            let [value, label] = [item.dataset.value!, item.textContent!];
            const state = value === 'empty' ? null : {value, label, name};
            setSelected(state);
            toggleItems(e);
            if(onSelected){
                onSelected(state!);
            }
        }
    }

    const toggleItems = (e: React.MouseEvent<HTMLDivElement>)=>{
        const listBox = divRef.current?.querySelector('.list-box');
        
        if(e.currentTarget.dataset.comboValue){
            collapseAll();
        }
        
        if(listBox?.classList.contains('show')){
            collapseAll();
        }else{
            divRef.current?.querySelector('.back')?.classList.add('show');
            listBox?.classList.add('show');
        }
    }
    
    const collapseAll = ()=>{
        document.querySelectorAll('[data-combo-list-box]').forEach(el => el.classList.remove('show'));
        document.querySelectorAll('[data-combo-back]').forEach(el => el.classList.remove('show'));
    }

    const init = ()=>{
        const item = divRef.current?.querySelector('.list-box .item');
        if(item){
            setItemHeight(item.getBoundingClientRect().height * (items.length + 1) + 2);
        }
        if(defaultValue){
            const filtered = items.filter(item => item.value === defaultValue);
            if(filtered.length > 0){
                setSelected(filtered[0]);
            }
        }
    }

    useEffect(()=>{
        init();
    }, []);

    return (
        <div css={style(itemHeight, readOnly, styles)} ref={divRef} data-combo>
            <div className='wrapper'>
                <div className={`value-box ${required ? 'red-star' : ''}`} data-combo-value onClick={onClickBox}>
                    {selected ? 
                        <div className='value'>{selected.label}</div> :
                        <div className='placehoder'>{placeholder}</div>
                    }
                    {readOnly ? null :
                        <div className='icon-box'>
                            <img src='comboDown.png'></img>
                        </div>
                    }
                </div>
                <div className='list-box' data-combo-list-box onClick={onClickItems}>
                    <div className='item empty' data-value='empty'>선택 안함</div>
                    {items.map(item => (
                        <div key={item.value} className='item' data-value={item.value}>{item.label}</div>
                    ))}
                </div>
            </div>
            <div className='back' data-combo-back onClick={(e)=>{toggleItems(e)}}></div>
        </div>
    );
}

const style = (ih: number, ro: boolean, st?: Style)=>(css`
    width: ${st ? st.width || '120px' : '120px'};
    ${st ? st.margin ? `margin: ${st.margin};` : '' : ''}
    .back {
        display: none;
        z-index: 10;
        position : fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        // background-color: rgb(0,0,0,0.5);
    }
    .back.show {
        display: unset;
    }
    .wrapper {
        position: relative;
        z-index: 99;
        height: ${st ? st.height || '28px' : '28px'};
        .value-box {
            display: flex;
            justify-content: ${ro ? 'center' : 'space-between'};
            align-items: center;
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 1;
            padding: 0 10px;
            background-color: white;
            cursor: ${ro ? '' : 'pointer'};
            .value {
                // font-weight: bold;
                // color: black;
            }
            .placehoder {
                color: var(--color-gray);
                font-weight: 600;
                font-size: 18px;
            }
        }
        .list-box {
            height: 0px;
            transform: translateY(-5px);
            border: 1px solid black;
            overflow: hidden;
            transition: .2s;
            .item {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 52px;
                color: black;
                font-weight: 500;
                font-size: 16px;
                background-color: white;
                transition: .2s;
                &:hover {
                    box-shadow: inset 0 0 0 2px black;
                }
                &:not(:last-child) {
                    border-bottom: 1px solid black;
                }
            }
            .empty {
                color: var(--color-gray);
            }
        }
        .list-box.show {
            transform: unset;
            cursor: pointer;
            height: ${ih}px;
            opacity: 1;
        }
    }
`);

export default Combobox;