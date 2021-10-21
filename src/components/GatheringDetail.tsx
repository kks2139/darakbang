import React from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {GatheringInfo} from '../util/interfaces';

interface Props {
    info: GatheringInfo | null
}

function GatheringDetail({info}: Props){
    return (
        !info ? null :
        <div css={style}>
            <div className='interests'>
                {info.interests}
            </div>
            <div className='simple-info'>
                <div className='pay'>{info.payYn === 'Y' ? '유료' : '일반'}</div>
                <div className='desc'>{info.description}</div>
                {info.closeSoon === 'Y' ? 
                    <div className='close-soon'>마감임박</div>
                    : null
                }
                {info.filter.map(f => (
                    <div key={f} className='filter tag'>{f}</div>
                ))}
                {info.title.map(t => (
                    <div key={t} className='title tag'>{t}</div>
                ))}
            </div>
            <img className='main-img' src={info.imgUrl}></img>
            <div className='detail-info'>
                <div className='row'>
                    <div className='field'>팀 명</div>
                    <div className='val'>{info.name}</div>
                </div>
                <div className='row'>
                    <div className='field'>지역</div>
                    <div className='val'>{info.place}</div>
                </div>
                <div className='row'>
                    <div className='field'>모집인원</div>
                    <div className='val'>{info.people}</div>
                </div>
                <div className='row'>
                    <div className='field'>회비</div>
                    <div className='val'>{info.membershipFee}</div>
                </div>
                <div className='row'>
                    <div className='field'>활동 기간</div>
                    <div className='val'></div>
                </div>
                <div className='row'>
                    <div className='field'>활동 날짜</div>
                    <div className='val'></div>
                </div>
                <div className='row'>
                    <div className='field'>목적</div>
                    <div className='val'></div>
                </div>
            </div>
        </div>
    );
}

const style = css`
    width: 616px;
    .interests {
        font-size: 16px;
        color: #9D9D9D;
        margin-bottom: 16px;
    }
    .simple-info {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .pay {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 62px;
            height: 32px;
            font-size: 16px;
            font-weight: bold;
            color: #02BCD6;
            background-color: white;
            border: 1px solid #02BCD6; 
        }
        .desc {
            font-size: 24px;
            font-weight: bold;
            margin: 0 12px;
        }
        .close-soon {
            width: 60px;
            font-size: 12px;
            font-weight: 600;
            text-align: center;
            color: white;
            margin-right: 20px;
            background-color: red;
            border: 1px solid white;
            padding: 1px 0;
        }
        .filter {
            background-color: #FFA89C;
        }
        .title {
            background-color: #EDFF1C;
        }
        .tag {
            display: flex;
            align-items: center;
            height: 19px;
            padding: 4px;
            margin-right: 12px;
            font-size: 12px;
            font-weight: 600;
            border: 1px solid black;
            border-radius: 10px;
        }
    }
    .main-img {
        width: 100%;
        height: 335px;
        margin-bottom: 24px;
    }
    .detail-info {
        width: 100%;
        padding: 20px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 0 1px 0 black;
        .row {
            display: flex;
            margin-bottom: 20px;
            .field {
                display: flex;
                align-items: center;
                width: 91px;
                font-size: 16px;
                font-weight: bold;
            }
            .val {

            }
        }
    }
`;

export default GatheringDetail;