import React from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {GridColumnProps} from './GridColumn';

interface Props {
    columnProps: GridColumnProps[]
    onClickHeader?: ()=>void
}

function GridHeader({columnProps, onClickHeader}: Props){
    const onClick = ()=>{
        if(onClickHeader) onClickHeader();
    }

    return (
        <div css={style} onClick={onClick}>
            {columnProps.map(prop => {
                const {width='100px'} = prop;
                return <div className='col' style={{width}}>{prop.headerText}</div>
            })}
        </div>
    );
}

const style = css`
    display: flex;
    align-items: center;
    padding: 18px 15px;
    border-bottom: 1px solid var(--color-light-gray);
    .col {
        color: black;
        font-size: 16px;
        margin-right: 3px;
    }
    &:hover {
    }
`;

export default GridHeader;