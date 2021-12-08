import React from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {GridRow, GridHeader} from './index';
import {GridColumnProps} from './GridColumn';
import {Constraint} from '../util/interfaces';

interface Props<Data> {
    title?: string
    children: JSX.Element | JSX.Element[]
    dataList: Data[]
    onClickRow?: (param: Data)=> void
}

function Grid<Data extends Constraint>({title='', children, dataList, onClickRow}: Props<Data>){
    const columns = Array.isArray(children) ? children : [children]; 
    const columnProps: GridColumnProps[] = columns.map(col => col.props);

    return (
        <div css={style}>
            <div className='title'>{title}</div>
            <GridHeader columnProps={columnProps}/>
            {dataList.map(data => (
                <GridRow<Data> columnProps={columnProps} data={data} onClickRow={onClickRow}/>
            ))}
        </div>
    );
}

const style = css`
    width: 100%;
    min-height: 100px;
    
    .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 35px;
    }
`;

export default Grid;