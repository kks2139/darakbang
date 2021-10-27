import React, { useEffect } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {GatheringInfo} from '../util/interfaces';
import {divDate} from '../util/util';

interface Props {
    info: GatheringInfo
    onClickGathering: (param: GatheringInfo)=> void
}

function GatheringCard({info, onClickGathering}: Props){
    const nextAct = divDate(info?.nextActiveDate || '');
    const isEnd = info.id === '6';

    const onClick = ()=>{
        if(!isEnd){
            onClickGathering(info);
        }
    } 

    return (
        <div css={style()} onClick={onClick}>
            <div className={isEnd ? 'apply-end' : ''}></div>
            <div className='preview'>
                <img alt={info.name} src={info.imgUrl}></img>
                <div className='top'>
                    <div className={isEnd ? 'end' : info.closeSoon === 'Y' ? 'close-soon' : ''}>
                        {isEnd ? '마감' : info.closeSoon === 'Y' ? '마감임박' : ''}
                    </div>
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
                <div className='row1'>
                    <div className='box1'>
                        <div className='nm'>{info.name}</div>
                        <div className='it'>{info.interests}</div>
                    </div>
                    <div className='lk'>👍🏻 {info.likes}</div>
                </div>
                <div className='row2'>
                    {info.description}
                </div>
                <div className='row3'>
                    {/* {info.nextActiveDate} */}
                    {`${nextAct.MM}월 ${nextAct.dd}일 ${nextAct.HH} : ${nextAct.mm} ${nextAct.ampm}`}
                </div>
                <div className='row4'>
                    {info.place}
                </div>
                <div className='row5'>
                    <div className='all'>{info.people}명</div>
                    <div className='boy'>남{info.boy}</div>
                    <div className='girl'>여{info.girl}</div>
                    <div>모집</div>
                </div>
                <div className='row6'>
                    {info.applyTo} 신청 마감
                </div>
            </div>       
        </div>
    );
}

const style = ()=>(css`
    position: relative;
    width: 264px;
    margin: 0 10px 32px 10px;
    cursor: pointer;
    .preview {
        position: relative;
        height: 280px;
        margin-bottom: 16px;
        transition: .3s;
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
                width: 60px;
                font-size: 12px;
                font-weight: 600;
                text-align: center;
                color: white;
                background-color: red;
                border: 1px solid white;
                padding: 1px 0;
            }
            .end {
                z-index: 2;
                width: 60px;
                font-size: 12px;
                font-weight: 600;
                text-align: center;
                color: white;
                background-color: black;
                border: 1px solid white;
                padding: 1px 0;
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
                    margin-bottom: 5px;
                }
                .filter {
                    background-color: var(--color-peach);
                }
                .title {
                    background-color: var(--color-yellow);
                }
            }
        }
    }
    .detail {
        display: flex;
        flex-direction: column;
        padding: 12px;
        border: 1px solid #F3F3F3;
        border-radius: 10px;
        transform: translateY(-22px);
        background-color: white;
        transition: .3s;
        [class*='row'] {
            display: flex;
        }
        .row1 {
            justify-content: space-between;
            font-size: 12px;
            .box1 {
                display: flex;
                .nm {
                    font-weight: bold;
                    margin-right: 8px;
                }
                .it {
                    color: var(--color-gray);
                }
            }
            .lk {
                color: var(--color-gray);
            }
        }
        .row2 {
            font-size: 24px;
            font-weight: bold;
            margin: 12px 0;
        }
        .row3 {
            font-size: 12px;
            font-weight: bold;
        }
        .row4 {
            margin: 8px 0;
            font-size: 12px;
            font-weight: 500;
        }
        .row5 {
            display: flex;
            font-size: 12px;
            color: var(--color-gray);
            > div {
                margin-right: 5px;
            }
            .all {
                color: black;
            }
        }
        .row6 {
            margin-top: 12px;
            font-weight: 500;
            font-size: 16px;
        }
    }
    .apply-end {
        z-index: 1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgb(0, 0, 0, 0.4);
        height: calc(100% - 22px);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    transition: .3s;
    &:hover {
        transform: translateY(-10px);
        .preview {
            box-shadow : 0 0 10px -3px black;
        }
        .detail {
            box-shadow : 0 0 10px -3px black;
        }
    }
`);

export default GatheringCard;