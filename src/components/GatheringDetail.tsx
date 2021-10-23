import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {GatheringInfo} from '../util/interfaces';
import {divDate} from '../util/util';

interface Props {
    info: GatheringInfo | null
    onBack: ()=> void
}

function GatheringDetail({info, onBack}: Props){
    const divRef = useRef<HTMLDivElement | null>(null);
    const nextAct = divDate(info?.nextActiveDate || '');
    const initDate = divDate(info?.initDate || '');
    const lastActiveDate = divDate(info?.lastActiveDate || '');

    const onClickBack = ()=>{
        onBack();
    }
    
    const onClickDate = (e: React.MouseEvent<HTMLDivElement>)=>{
        selectDate(e);
    }
    
    const selectDate = (e: React.MouseEvent<HTMLDivElement>)=>{
        const el = e.currentTarget;
        if(!el.classList.contains('end')){
            const selected = divRef.current?.querySelector('.date-box .sel');
            if(selected){
                selected.classList.remove('sel');
            }
            el.classList.add('sel');
        }
    }

    return (
        !info ? null :
        <div css={style} ref={divRef}>
            {/* 뒤로가기 임시버튼 */}
            <div className='back-btn' onClick={onClickBack}>뒤로가기</div>
            <div className='wrapper'>
                <section className='info-section'>
                    <div className='simple-info'>
                        <div className='interests'>
                            {info.interests}
                        </div>
                        <div className='header'>
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
                    </div>
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
                                {`${nextAct.MM}월 ${nextAct.dd}일 ${nextAct.HH} : ${nextAct.mm} ${nextAct.ampm}`} 
                                <div className='else'>외 {info.activeDateList.length - 1}</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='field'></div>
                            <div className='active-list'>
                                {info.activeDateList.map(d => {
                                    const end = info.nextActiveDate === d ? 'end' : '';
                                    return (
                                        <div key={d} className='date-box'>
                                            <div className={`dt ${end}`} onClick={onClickDate}>
                                                {`${divDate(d).MM}월 ${divDate(d).dd}일 ${divDate(d).HH} : ${divDate(d).mm} ${divDate(d).ampm}`}
                                                <img src='man.png'></img>
                                            </div>
                                            {end ? <div className='end-txt'>마감</div> : null}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='field'>목적</div>
                            <div className='val'>{info.purpose}</div>
                        </div>
                    </div>
                    <div className='active-info'>
                        <div className='title'>활동 소개</div>
                        <div className='content'>
                            <div className='img-box'>
                                {info.subImgUrls.map(d => (
                                    <img key={d} src={d}></img>
                                ))}
                            </div>
                            <div className='desc'>
                                {info.detailDescription}
                            </div>
                        </div>
                    </div>
                    <div className='caution-info'>
                        <div className='text'>
                            • 다락방의 모든 팀 및 활동은 단순 사교 활동을 지양합니다.<br/>
                            &nbsp;&nbsp;불편사항은 <span>문의하기</span>를 통해 운영자에게 전달해주세요.<br/>
                            <br/>
                            • 활동 중 발생한 사고에 대해서는 본사에서 책임을 지지 않습니다.<br/>
                            <br/>
                            • 모든 활동은 코로나19 방역준수기준을 따릅니다. 지켜지지 않는 모임이 발생할 경우<br/>
                            &nbsp;&nbsp;신고 바랍니다.
                        </div>
                    </div>
                </section>
                <section className='floating-section'>
                    <div className='floating-box'>
                        <div className='title'>팀소개</div>
                        <div className='content'>
                            <div className='interests'>{info.interests}</div>
                            <div className='name'>{info.name}</div>
                            <div className='line1'></div>
                            <div className='row'>
                                <div className='txt1'>{`${initDate.MM}월 ${initDate.dd}일 개설`}</div>
                                <div className='txt2'>{`${lastActiveDate.MM}월 ${lastActiveDate.dd}일에 마지막으로 모인 팀 입니다.`}</div>
                            </div>
                            <div className='row'>
                                <div className='txt1'>{info.participants}명이 팀에 참여했습니다.</div>
                                <div className='txt2'>현재 팀원은 {info.currentTeam}명 입니다.</div>
                            </div>
                            <div className='row age'>
                                <div className='txt1'>평균연령 {info.averageAge}세</div>
                                <div className='txt2'>남 {info.boyRate}%  여 {info.boyRate}%</div>
                            </div>
                            <div className='line2'></div>
                            <div className='likes'>
                                <div className='good'></div>
                                <div className='bad'></div>
                            </div>
                            <div className='btn'>이 팀에 합류하기</div>
                        </div>
                        {info.filter.includes('한 번 만남') ? 
                            <div className='once-box'>
                                <div className='btn once'>한 번 참여하기</div>
                                <div className='txt'>• 한 번 만남이 가능한 게시물입니다.</div>
                            </div>
                        : null}
                        <div className='icons'>
                            <div className='icon'>
                                <img src=''></img>
                                <div className='txt'>공유하기</div>
                            </div>
                            <div className='icon'>
                                <img src=''></img>
                                <div className='txt'>주머니 담기</div>
                            </div>
                        </div>
                    </div>
                </section>
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
    .wrapper {
        display: flex;
        .interests {
            font-size: 16px;
            color: #9D9D9D;
            margin-bottom: 16px;
        }
        .header {
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
            // border: 1px solid #9D9D9D;
            margin-bottom: 40px;
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
                            position: relative;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 168px;
                            height: 40px;
                            border: 1px solid #D9D9D9;
                            border-radius: 25px;
                            cursor: pointer;
                            img {
                                display: none;
                                position: absolute;
                                right: -20px;
                            }
                        }
                        .dt.sel {
                            border-color: black;
                            img {
                                display: unset;
                            }
                        }
                        .dt.end {
                            color: #D9D9D9;
                            cursor: unset;
                        }
                        .end-txt {
                            display: flex;
                            align-items: center;
                            color: #D9D9D9;
                            margin-left: 8px;
                        }
                    }
                }
            }
        }
        .active-info {
            .title {
                font-weight: bold;
                font-size: 24px;
                margin-bottom: 16px;
            }
            .content {
                width: 100%;
                padding: 20px;
                border-radius: 10px;
                background-color: white;
                // border: 1px solid #9D9D9D;
                .img-box {
                    img {
                        margin-bottom: 24px;
                    }
                }
                .desc {
                    font-size: 16px;
                    line-height: 26px;
                    white-space: pre-line
                }
            }
        }
        .caution-info {
            width: 100%;
            margin: 80px 0;
            .text {
                white-space: pre-line;
                color: #9D9D9D;
                font-size: 16px;
                span {
                    color: black;
                    font-weight: bold;
                }
            }
        }
        .floating-section {
            position: relative;
            .floating-box {
                position: fixed;
                top: 80px;
                margin-left: 24px;
                .title {
                    font-weight: bold;
                    font-size: 24px;
                    margin-bottom: 16px;
                }
                .content {
                    min-width: 265px;
                    height: 440px;
                    padding: 12px;
                    border: 1px solid #C4C4C4;
                    border-radius: 10px;
                    background-color: white;
                    margin-bottom: 12px;
                    .interests {
                        color: #9D9D9D;
                        font-size: 16px;
                        margin-bottom: 24px;
                    }
                    .name {
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .row {
                        margin-bottom: 24px;
                        .txt1 {
                            font-weight: 600;
                            font-size: 16px;
                        }
                        .txt2 {
                            font-size: 12px;
                            color: #9D9D9D;
                            margin-top: 5px;
                        }
                    }
                    .line1 {
                        transform: translateX(-12px);
                        width: calc(100% + 24px);
                        margin: 12px 0 24px 0;
                        height: 2px;
                        background-color: #C4C4C4;
                    }
                    .line2 {
                        margin-bottom: 24px;
                        height: 1px;
                        background-color: #C4C4C4;
                    }
                }
                .btn {
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 240px;
                    height: 56px;
                    line-height: 54px;
                    font-size: 24px;
                    font-weight: 500;
                    text-align: center;
                    border: 1px solid black;
                    border-radius: 25px;
                    background-color: #EDFF1C;
                    cursor: pointer;
                }
                .btn.once {
                    background-color: #FFA89C;
                }
                .once-box {
                    .txt {
                        text-align: center;
                        font-size: 8px;
                        color: #9D9D9D;
                        margin-top: 4px;
                    }
                }
            }
        }
    }
`;

export default GatheringDetail;