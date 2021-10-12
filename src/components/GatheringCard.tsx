import React from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {GatheringInfo} from '../util/interfaces';

interface Props {
    info: GatheringInfo
}

function GatheringCard({info}: Props){
    return (
        <div css={style}>
            <div className='preview'>
                <img alt={info.name} src={info.imgUrl}></img>
                <div className='top'>
                    <div className='t1'>{info.filter}</div>
                    <div className='t2'>😀</div>
                </div>
            </div> 
            <div className='detail'>
                <div className='row-1'>
                    <div className='name'>{info.name}</div>
                    <div className='likes'>👍🏻{info.likes}</div>
                </div>
                <div className='row-2'>{info.description}</div>
                <div className='row-3'>{info.interests}</div>
                <div className='row-4'>
                    <div>{info.period} 까지 모집</div>
                    <div>{info.place}</div>
                </div>
            </div>       
        </div>
    );
}

const style = css`
    width: 264px;
    margin: 0 10px 32px 10px;
    .preview {
        position: relative;
        height: 280px;
        margin-bottom: 16px;
        img {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        .top {
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px;
            .t1 {
                display: flex;
                align-items: center;
                height: 19px;
                padding: 4px;
                font-size: 12px;
                font-weight: 600;
                background-color: #EDFF1C;
                border: 1px solid black;
            }
        }
    }
    .detail {
        border: 1px solid black;
        border-bottom: 0;
        display: flex;
        flex-direction: column;
        > [class*="row"] {
            border-bottom: 1px solid black;
            font-size: 16px;
            padding: 3px;
        }
        .row-1 {
            height: 30px;
            display: flex;
            justify-content: space-between;
            .name {
                font-weight: 600;
            }
            .likes {
                color: #B4B4B4;
            }
        }
        .row-2 {
            height: 70px;
        }
        .row-3 {
            height: 30px;
            color: #B4B4B4;
        }
        .row-4 {
            display: flex;
            justify-content: space-between;
            height: 30px;
            font-weight: 500;
        }
    }
`;

export default GatheringCard;