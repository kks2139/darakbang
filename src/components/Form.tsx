import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

interface Props {
    children: JSX.Element | JSX.Element[]
}

function Form({children}: Props){
    const childs = Array.isArray(children) ? children : [children];

    const style = css`
        width: 100%;
    `;

    return (
        <form css={style}>
            {childs}
        </form>
    );
}

export default Form;