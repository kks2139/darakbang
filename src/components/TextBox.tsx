import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import CSS from 'csstype'

interface Props {
    text: string
    customStyle?: CSS.Properties
}

function TextBox({text, customStyle}: Props){
    const style = css`
        font-size: 16px;
        font-weight: 500;
        background-color: white;
        border-radius: 5px;
        padding: 8px 18px;
        margin-bottom: 12px;
    `;

    return (
        <div css={style} style={customStyle}>
            {text}
        </div>
    );
}

export default TextBox;