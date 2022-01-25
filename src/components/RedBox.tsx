import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {
    children: JSX.Element
}

function RedBox({children}: Props){
    const divRef = useRef<HTMLDivElement | null>(null);

    return (
        <div css={style} ref={divRef} data-redbox>
            {children}
        </div>
    );
}

const style = css`
    transition: .3s;
    .red-star {
        position: relative;
        &::before {
            content: '*';
            color: red;
            font-size: 18px;
            font-weight: bold;
            position: absolute;
            left: -10px;
            transform: translateY(-5px);
        }
    }
`;

export default RedBox;