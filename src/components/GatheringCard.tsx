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
                    <div className='close-soon'>마감임박</div>
                    <div className='filter-box'>
                        {info.filter.map(f => (
                            <div key={f} className='filter'>{f}</div>
                        ))}
                        {info.title.map(t => (
                            <div key={t} className='title'>{t}</div>
                        ))}
                    </div>
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
            align-items: flex-start;
            padding: 8px;
            .close-soon {
                font-size: 12px;
                font-weight: 600;
                color: white;
                background-color: red;
                border: 1px solid white;
                padding: 1px 5px;
            }
            .filter-box {
                > div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 19px;
                    padding: 4px;
                    font-size: 12px;
                    font-weight: 600;
                    border: 1px solid black;
                    border-radius: 10px;
                    margin-bottom: 10px;
                }
                .filter {
                    background-color: #FFA89C;
                }
                .title {
                    background-color: #EDFF1C;
                }

            }
        }
    }
    .detail {
        border: 1px solid #F3F3F3;
        border-radius: 10px;
        border-bottom: 0;
        display: flex;
        flex-direction: column;
    }
`;

export default GatheringCard;