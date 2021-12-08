import React from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {GridColumnProps} from './GridColumn';
import {Constraint} from '../util/interfaces';

interface Props<Data> {
    columnProps: GridColumnProps[]
    data: Data
    onClickRow?: (param: Data)=>void
}

function GridRow<Data extends Constraint>({columnProps, data, onClickRow}: Props<Data>){
    const onClick = ()=>{
        if(onClickRow) onClickRow(data);
    }

    return (
        <div css={style} onClick={onClick}>
            {columnProps.map(prop => {
                const {valueFormatFunction, cellStyle, width} = prop;
                let value = data[prop.field] as string | number;

                if(valueFormatFunction){
                    value = valueFormatFunction(value);
                }

                if(cellStyle){
                    // cellStyle.width = width || '80px';
                }

                return <div className='col' style={cellStyle}>{value}</div>
            })}
        </div>
    );
}

const style = css`
    display: flex;
    padding: 18px 15px;
    border-bottom: 1px solid var(--color-light-gray);
    font-size: 20px;
    // color: var(--color-gray);
    cursor: pointer;
    transition: .2s;
    &:hover {
        background-color: var(--color-bg-gray);
    }
    .col {
        
    }
    .bold {
        font-weight: bold;
        color: black;
    }
    .center {
        text-align: center;
    }
`;

export default GridRow;