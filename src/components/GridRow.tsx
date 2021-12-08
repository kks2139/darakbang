import React from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {GridColumnProps} from './GridColumn';
import {Constraint} from '../util/interfaces';
import CSS from 'csstype';

interface Props<Data> {
    columnProps: GridColumnProps[]
    data: Data
    onClickRow?: (param: Data)=>void
}

function GridRow<Data extends Constraint>({columnProps, data, onClickRow}: Props<Data>){
    const onClick = ()=>{
        if(onClickRow) onClickRow(data);
    }

    const mergeStyle = (style: CSS.Properties | undefined, width: string)=> ({...style, width})

    return (
        <div css={style} onClick={onClick}>
            {columnProps.map(prop => {
                const {valueFormatFunction, cellStyle, width='100px'} = prop;
                let value = data[prop.field] as string | number;

                if(valueFormatFunction){
                    value = valueFormatFunction(value);
                }

                return <div className='col' style={mergeStyle(cellStyle, width)}>{value}</div>
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