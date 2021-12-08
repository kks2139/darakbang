import React from "react";
import CSS from 'csstype';

export interface GridColumnProps {
    width?: string
    field: string
    headerText: string
    valueFormatFunction?: (param: string | number)=> string | number
    cellStyle?: CSS.Properties
}

function GridColumn({width, field, headerText, valueFormatFunction, cellStyle,}: GridColumnProps){
    return <></>;
}

export default GridColumn;