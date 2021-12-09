import React, { useEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {
    names: string[]
    subNames?: string[]
    children: JSX.Element | JSX.Element[]
    selectedIndex?: number
    selectedSubIndex?: number
    onClickTab?: ()=> void
    width?: number
    height?: number
}

function Tab({names, subNames=[], children, selectedIndex=0, selectedSubIndex=0, onClickTab, width=0, height=0}: Props){
    const [index, setIndex] = useState(0);
    const divRef = useRef<HTMLDivElement | null>(null);
    const childs = Array.isArray(children) ? children : [children];

    const onClick = (e: React.MouseEvent<HTMLDivElement>)=>{
        selectChild(e);
        if(onClickTab){
            onClickTab();
        }
    }

    const selectChild = (e: React.MouseEvent<HTMLDivElement> | number)=>{
        const selected = divRef.current?.querySelector('.sel');
        if(typeof e === 'number'){
            selected?.classList.remove('sel');
            divRef.current?.querySelector(`[data-idx="${e}"]`)?.classList.add('sel');
            setIndex(e);
        }else{
            selected?.classList.remove('sel');
            e.currentTarget.classList.add('sel');
            setIndex(Number(e.currentTarget.dataset.idx));
        }
    }

    useEffect(()=>{
        selectChild(selectedIndex);
    }, []);

    return (
        <div css={style(width)} ref={divRef}>
            <div className='tabs'>
                <div className='box'>
                    {names.map((n, i) => (
                        <div key={n} className='tab' data-idx={i} onClick={onClick}>{n}</div>
                    ))}
                </div>
                <div className='box'>
                    {subNames.map((n, i) => (
                        <div key={n} className={`sub-tab ${selectedSubIndex === i ? 'focus' : ''}`}><span>{n}</span></div>
                    ))}
                </div>
            </div>
            <div className='content'>
                {childs[index]}
            </div>
        </div>
    );
}

const style = (width: number)=>(css`
    ${width ? `width: ${width}px;` : 'width: 100%;'}
    .tabs {
        display: flex;
        justify-content: space-between;
        .box {
            display: flex;
            .tab, .sub-tab {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 32px;
                padding: 0 15px;
                color: var(--color-gray);
                font-size: 16px;
                border: 1px solid transparent;  
                cursor: pointer;
                transform: translateY(1px);
            }
            .tab.sel, .sub-tab {
                border-color: var(--color-dim-gray);
                border-bottom: transparent;
                background-color: white;
                color: var(--color-main-text);
                font-weight: bold;
            }
            .sub-tab {
                border-bottom: 1px solid var(--color-dim-gray);
                color: var(--color-gray);
                cursor: unset;
    
            }
            .sub-tab.focus {
                border-bottom: transparent;
                color: black;
            }
        }
    }
    .content {
        background-color: white;
        border: 1px solid var(--color-dim-gray);  
        padding: 20px;
    }
`);

export default Tab;