import React from "react";
import CSS from 'csstype';

export interface GridColumnProps {
    width?: string
    field: string
    headerText?: string
    valueFormatFunction?: (param: string | number)=> string | number
    cellStyle?: CSS.Properties
    ellipsis?: boolean
}

function GridColumn({width, field, headerText, valueFormatFunction, cellStyle, ellipsis}: GridColumnProps){
    return <></>;
}

export default GridColumn;