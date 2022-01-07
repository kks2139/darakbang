import React, { useState, useEffect, useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {GatheringInfo} from '../../util/interfaces';
import {divDate, setIntersectionObserver} from '../../util/util';
import {GatheringFloatingBox, DateButtonList, ModifyDate} from '../index';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {appActions} from '../../store/app';

interface Params {
    gatheringInfo: GatheringInfo
}

function GatheringDetail(){
    const dispatch = useDispatch();
    const location = useLocation<Params>();
    const divRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLDivElement | null>(null);
    const info = location.state.gatheringInfo;
    const [isFloat, setIsFloat] = useState(false);
    const nextAct = divDate(info?.nextActiveDate || '');

    const onClickModify = (e: React.MouseEvent<HTMLButtonElement>)=>{
        const {name} = e.currentTarget;
        dispatch(appActions.togglePopup({
            show: true,
            children: (
                <ModifyDate gatheringInfo={info}/>
            )
        }));
    }

    const setFloating = ()=>{
        setIntersectionObserver({
            root: null,
            dom: headerRef.current!,
            threshold: 1,
            intersectionCallback: (el: Element, isIntersecting: boolean)=>{
                setIsFloat(!isIntersecting);
            }
        });
    } 

    useEffect(()=>{
        setFloating();
    }, []);
    
    return (
        !info ? null :
        <div css={style} ref={divRef}>
            <div className='wrapper'>
                <section className='info-section'>
                    <div className='simple-info'>
                        <div className='interests'>
                            {info.interests}
                        </div>
                        <div className='header' ref={headerRef}>
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
                                <button className='modify-btn' onClick={onClickModify}>수정</button>
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
                                <button className='modify-btn' onClick={onClickModify}>수정</button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='field'></div>
                            <DateButtonList activeDateList={info.activeDateList} nextActiveDate={info.nextActiveDate}/>
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
                    <GatheringFloatingBox info={info} isFloat={isFloat}/>
                </section>

            </div>
        </div>
    );
}

const style = css`
    .back-btn {
        width: 70px;
        text-align: center;
        cursor: pointer;
        border: 1px solid var(--color-main-text);
        border-radius: 5px;
        background-color: white;
        color: var(--color-main-text);
        font-weight: bold;
        margin: 10px 0;
    }
    .modify-btn {
        padding: 4px 8px;
        font-size: 16px;
        color: black;
        background-color: var(--color-yellow);
        margin: 0 20px;
        border: 1px solid black;
    }
    .wrapper {
        display: flex;
        .info-section {
            width: 616px;
            .simple-info {
                .interests {
                    font-size: 16px;
                    color: var(--color-gray);
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
                        color: var(--color-main-text);
                        background-color: white;
                        border: 1px solid var(--color-main-text); 
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
                        background-color: var(--color-peach);
                    }
                    .title {
                        background-color: var(--color-yellow);
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
                    object-fit: cover;
                    margin-bottom: 24px;
                }
            }
            .detail-info {
                width: 100%;
                padding: 20px;
                border-radius: 10px;
                background-color: white;
                // border: 1px solid var(--color-gray);
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
                        align-items: center;
                        font-size: 16px;
                        .can-apply {
                            display: flex;
                            align-items: center;
                            color: var(--color-peach);
                            border: 1px solid var(--color-peach);
                            border-radius: 10px;
                            padding: 0 3px;
                        }
                        .gray {
                            color: var(--color-gray);
                            margin: 0 8px;
                        }
                        .else {
                            color: var(--color-peach);
                            margin: 0 5px;
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
                    // border: 1px solid var(--color-gray);
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
                    color: var(--color-gray);
                    font-size: 16px;
                    span {
                        color: black;
                        font-weight: bold;
                    }
                }
            }
        }
        .floating-section {
            position: relative;
            width: 290px;
            padding-left: 24px;
        }
    }
`;

export default GatheringDetail;