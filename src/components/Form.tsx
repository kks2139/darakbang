import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

interface Props {
    children: JSX.Element | JSX.Element[]
}

function Form({children}: Props){
    const style = css`
        width: 100%;
    `;

    return (
        <form css={style}>
            {children}
        </form>
    );
}

export default Form;