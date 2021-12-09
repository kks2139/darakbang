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

    const mergeStyle = (style: CSS.Properties | undefined, width: string, ellipsis: boolean)=> {
        const inlineStyle = {
            ...style, 
            width
        }
        if(ellipsis){
            const omit = {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }
            Object.assign(inlineStyle, omit);
        }
        return (inlineStyle);
    }

    return (
        <div css={style} onClick={onClick}>
            {columnProps.map(prop => {
                const {valueFormatFunction, cellStyle, width='100px', ellipsis=false} = prop;
                let value = data[prop.field] as string | number | JSX.Element;

                if((typeof value === 'string' || typeof value === 'number') && valueFormatFunction){
                    value = valueFormatFunction(value);
                }

                return <div className='col' style={mergeStyle(cellStyle, width, ellipsis)}>{value}</div>
            })}
        </div>
    );
}

const style = css`
    display: flex;
    align-items: center;
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
        margin-right: 3px;
    }
`;

export default GridRow;