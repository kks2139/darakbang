import React from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {GridRow, GridHeader} from './index';
import {GridColumnProps} from './GridColumn';
import {Constraint} from '../util/interfaces';
import CSS from 'csstype';

interface Props<Data> {
    title?: string
    children: JSX.Element | JSX.Element[]
    dataList: Data[]
    onClickRow?: (param: Data)=> void
    hideHeader?: boolean
    border?: boolean
    gridStyle?: CSS.Properties
}

function Grid<Data extends Constraint>({
    title='',
    children, 
    dataList, 
    onClickRow, 
    hideHeader=false, 
    border=false,
    gridStyle}: Props<Data>)
{
    const columns = Array.isArray(children) ? children : [children]; 
    const columnProps: GridColumnProps[] = columns.map(col => col.props);

    return (
        <div css={style(border)} style={gridStyle}>
            {title ? <div className='title'>{title}</div> : null}
            {hideHeader ? null : <GridHeader columnProps={columnProps}/>}
            {dataList.map((data, i) => (
                <GridRow<Data> key={i} columnProps={columnProps} data={data} onClickRow={onClickRow}/>
            ))}
        </div>
    );
}

const style = (border: boolean)=> (css`
    width: 100%;
    min-height: 100px;
    
    ${border ? `
        border: 1px solid var(--color-light-gray);
        border-bottom: transparent;
    ` : ''}

    .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 15px;
    }
`);

export default Grid;