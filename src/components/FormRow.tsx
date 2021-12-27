import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

interface Props {
    title: string
    children: JSX.Element | JSX.Element[] 
    required?: boolean
    titleWidth?: number
}

function FormRow({title, children, required=false, titleWidth=150}: Props){

    const style = css`
        display: flex;
        align-items: center;
        padding: 20px 20px 20px 25px;
        border-bottom: 1px solid var(--color-dim-gray);
        background-color: white;
        width: 100%;
        .title {
            display: flex;
            position: relative;
            font-size: 24px;
            font-weight: bold;
            width: ${titleWidth}px;
            margin: auto 0;
            ${required && `
                &::before {
                    position: absolute;
                    top: -3px;
                    left: -13px;
                    content: '*';
                    color: red;
                    font-weight: normal;
                }
            `}
        }
        .content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
        }
    `;

    return (
        <div css={style}>
            <div className='title'>{title}</div>
            <div className='content'>
                {children}
            </div>
        </div>
    );
}

export default FormRow;