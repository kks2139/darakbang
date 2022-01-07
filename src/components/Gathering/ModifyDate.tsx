import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {

}

function ModifyDate({}: Props){
    const style = css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 800px;
    `;

    return (
        <div css={style}>
            <div>활동 날짜 수정</div>
            
        </div>
    );
}

export default ModifyDate;