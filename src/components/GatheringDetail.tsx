import React from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {GatheringInfo} from '../util/interfaces';
import {divDate} from '../util/util';

interface Props {
    info: GatheringInfo | null
    onBack: ()=> void
}

function GatheringDetail({info, onBack}: Props){
    const onClickBack = ()=>{
        onBack();
    }

    return (
        !info ? null :
        <div css={style}>
            {/* 뒤로가기 임시버튼 */}
            <div className='back-btn' onClick={onClickBack}>뒤로가기</div>

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
                    <div className='val'>
                        {info.people}명
                        <div className='gray'>{`(여 팀원${info.girl} 남 팀원${2})`}</div>
                        <div className='can-apply'>신청가능</div>
                        <div className='gray'>{`여${(info.girl || 0) - (info.currGirl || 0)} 남${(info.boy || 0) - (info.currBoy || 0)} `}</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='field'>회비</div>
                    <div className='val'>{(info.membershipFee || 0).toLocaleString()}</div>
                </div>
                <div className='row'>
                    <div className='field'>활동 기간</div>
                    <div className='val'>10월 30일 - 11월 2일</div>
                </div>
                <div className='row'>
                    <div className='field'>활동 날짜</div>
                    <div className='val'>
                        {info.nextActiveDate} 
                        <div className='else'>외 {info.activeDateList.length - 1}</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='field'></div>
                    <div className='active-list'>
                        {info.activeDateList.map(d => (
                            <div key={d} className='date-box'>
                                <div className='dt'>
                                    {`${divDate(d).MM}월 ${divDate(d).dd}일 ${divDate(d).HH} : ${divDate(d).mm} ${divDate(d).ampm}`}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='row'>
                    <div className='field'>목적</div>
                    <div className='val'>{info.purpose}</div>
                </div>
            </div>
        </div>
    );
}

const style = css`
    width: 616px;
    .back-btn {
        width: 70px;
        text-align: center;
        cursor: pointer;
        border: 1px solid black;
        margin: 10px 0;
    }
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
        border: 1px solid #9D9D9D;
        .row {
            display: flex;
            margin-bottom: 20px;
            .field {
                width: 91px;
                font-size: 16px;
                font-weight: bold;
            }
            .val {
                display: flex;
                font-size: 16px;
                .can-apply {
                    color: #FFA89C;
                    border: 1px solid #FFA89C;
                    border-radius: 10px;
                    padding: 0 3px;
                }
                .gray {
                    color: #9D9D9D;
                    margin: 0 8px;
                }
                .else {
                    color: #FFA89C;
                    margin: 0 5px;
                }
            }
            .active-list {
                .date-box {
                    display: flex;
                    margin-bottom: 4px;
                    .dt {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 168px;
                        height: 40px;
                        border: 1px solid #D9D9D9;
                        border-radius: 25px;
                    }
                    .dt.sel {

                    }
                }
            }
        }
    }
`;

export default GatheringDetail;