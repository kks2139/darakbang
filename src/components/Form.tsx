import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

interface Props {
    children: JSX.Element | JSX.Element[]
    width?: string
}

function Form({children, width='100%'}: Props){
    const style = css`
        width: ${width};
    `;

    return (
        <form css={style}>
            {children}
        </form>
    );
}

export default Form;