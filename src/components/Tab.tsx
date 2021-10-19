import React, { useEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {
    names: string[]
    children: JSX.Element
    selectedIndex?: number
    onClickTab?: ()=> void
    width?: number
    height?: number
}

function Tab({names, children, selectedIndex=0, onClickTab, width=0, height=0}: Props){
    const [index, setIndex] = useState(0);
    const divRef = useRef<HTMLDivElement | null>(null);
    const childs = children.props.children;

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
                {names.map((n, i) => (
                    <div key={n} className='tab' data-idx={i} onClick={onClick}>{n}</div>
                ))}
            </div>
            <div className='content'>
                {childs[index]}
            </div>
        </div>
    );
}

const style = (width: number)=>(css`
    ${width ? `width: ${width}px;` : ''}
    .tabs {
        display: flex;
        .tab {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 32px;
            width: 64px;
            color: #9D9D9D;
            font-size: 16px;
            border: 1px solid transparent;  
            cursor: pointer;
            transform: translateY(1px);
        }
        .tab.sel {
            border-color: #9D9D9D;
            border-bottom: transparent;
            background-color: white;
            color: #02BCD6;
            font-weight: bold;
        }
    }
    .content {
        border: 1px solid #9D9D9D;  
        padding: 20px;
    }
`);

export default Tab;