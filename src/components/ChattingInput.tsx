import React from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useLocation } from "react-router-dom";

interface Props {
    onSendMessage: (param: string)=>void
}

function ChattingInput({onSendMessage}: Props){
    const style = css`
    `;

    return (
        <div css={style}>
            
        </div>
    );
}

export default ChattingInput;