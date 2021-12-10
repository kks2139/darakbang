import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type BorderType = 'none' | 'glow';

interface Props {
    content: JSX.Element | string
    type?: BorderType
}

function Border({content, type='none'}: Props){
    const getStyle = (type: BorderType)=> {
        let prop = '';
        switch(type){
            case 'none':
                prop = `
                    background-color: white;
                    border: 1px solid black;
                `;
                break;
            case 'glow':
                prop = `
                    background-color: black;
                    color: var(--color-yellow);
                    border: 1px solid var(--color-yellow);
                `;
                break;
        }
        return prop;
    }

    return (
        <div css={style(getStyle(type))}>
            {content}
        </div>
    );
}

const style = (prop: string)=> (css`
    padding: 4px 9px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    ${prop}
`);

export default Border;