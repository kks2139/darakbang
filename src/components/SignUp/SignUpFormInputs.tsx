import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {Input} from '../index';

interface Props {
    field: string
    fieldWidth?: number
    children: JSX.Element | JSX.Element[]
    required?: boolean
}

function SignUpFormInputs({field, fieldWidth=100, children, required}: Props){

    const style = css`
        display: flex;
        align-items: center;
        margin-bottom: 24px;

        .field {
            position: relative;
            font-size: 16px;
            font-weight: bold;
            width: ${fieldWidth}px;
            ${required && `
                &::before {
                    position: absolute;
                    top: -3px;
                    left: -10px;
                    content: '*';
                    color: red;
                    font-weight: normal;
                }
            `}
        }
        .inputs {
            display: flex;
            align-items: center;
        }
    `;

    return (
        <div css={style}>
            <div className='field'>{field}</div>
            <div className='inputs'>
                {children}
            </div>
        </div>
    );
}

export default SignUpFormInputs;