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
            </div>       
        </div>
    );
}

const style = css`
    width: 264px;
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
        height: 160px;
        border: 1px solid black;
    }
`;

export default GatheringCard;