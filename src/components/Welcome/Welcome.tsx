import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {Button} from '../index';

function Welcome(){
    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;

        .box-1 {
            
        }
        .box-2 {

        }
        .box-3 {

        }
    `;

    return (
        <div css={style}>
            <h1>환영합니다!</h1>
            <h1>다락방 회원가입 완료!</h1>
            <div className=''>

            </div>
            <div className=''>

            </div>
        </div>
    );
}

export default Welcome;