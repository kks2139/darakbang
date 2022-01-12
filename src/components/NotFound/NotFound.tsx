import React, { useEffect, useRef} from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

function NotFound(){
    const style = css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        font-weight: bold;
        color: var(--color-main-text);
    `;

    return (
        <div css={style}>
            찾을 수 없는 페이지 입니다
        </div>
    );
}

export default NotFound;