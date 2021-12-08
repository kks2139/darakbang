import React from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {GridRow} from './index';
import {GridColumnProps} from './GridColumn';
import {Constraint} from '../util/interfaces';

interface Props<Data> {
    title?: string
    children: JSX.Element | JSX.Element[]
    dataList: Data[]
}

function Grid<Data extends Constraint>({title='', children, dataList}: Props<Data>){
    const columns = Array.isArray(children) ? children : [children]; 
    const columnProps: GridColumnProps[] = columns.map(col => col.props);

    return (
        <div css={style}>
            <div className='title'>{title}</div>
            <div className='header'>
                {columns.map(col => (
                    <div key={col.props.field} className='col'>{col.props.headerText}</div>
                ))}
            </div>
            {dataList.map(data => (
                <GridRow<Data> columnProps={columnProps} data={data}/>
            ))}
        </div>
    );
}

Grid.GridRow = GridRow;

const style = css`
    width: 100%;
    min-height: 100px;
    
    .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 35px;
    }
    .header {
        display: flex;
        align-items: center;
        padding: 18px 15px;
        border-bottom: 1px solid var(--color-light-gray);
        .col {
            color: black;
            font-size: 16px
        }
        &:hover {
            background-color: unset !important;
        }
    }
`;

export default Grid;