import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {Button} from '../index';
import {GatheringInfo} from '../../util/interfaces';

interface Props {
    info: GatheringInfo
    onConfirmJoin: ()=>void
}

function ConfirmJoin({info, onConfirmJoin}: Props){
    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 100px;

        .name {
            margin-top: 40px;
            font-weight: bold;
        }

        .info {
            margin-bottom: 15px;
            font-size: 20px;
        }
    `;

    return (
        <div css={style}>
            <h2>참여 하시려는 활동의 내용이 맞는지</h2>
            <h2>마지막으로 확인해 주세요!</h2>

            <div className='info name'>{info.name}</div>
            <div className='info'>{info.place}</div>
            <div className='info'>{info.once}</div>
            <div className='info'>{info.nextActiveDate}</div>

            <div>
                <Button text='참여하기' styles={{margin: '20px 0 10px 0'}} onClick={onConfirmJoin}/>
            </div>
        </div>
    );
}

export default ConfirmJoin;