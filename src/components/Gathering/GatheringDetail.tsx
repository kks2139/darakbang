import React, { useState, useEffect, useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {GatheringInfo} from '../../util/interfaces';
import {divDate, setIntersectionObserver} from '../../util/util';
import {GatheringFloatingBox, DateButtonList, ModifyDate, ModifyTeam, Popup, Button} from '../index';
import {useLocation} from 'react-router-dom';

interface Params {
    gatheringInfo: GatheringInfo
}

function GatheringDetail(){
    const location = useLocation<Params>();
    const info = location.state.gatheringInfo;
    const [floatBox, setFloatBox] = useState({
        isFloat: false,
        floatingBoxTop: 0
    });
    const [showPopup, setShowPopup] = useState({
        modifyDate: false,
        modifyTeam: false
    });
    const divRef = useRef<HTMLDivElement | null>(null);
    const bottomDef = useRef<HTMLDivElement | null>(null);
    const nextAct = divDate(info?.nextActiveDate || '');

    const onPopupClose = (name: string)=>{
        setShowPopup({
            ...showPopup,
            [name]: false
        });
    }

    const onClickModify = (e: React.MouseEvent<HTMLElement>, name: string)=>{
        setShowPopup({
            ...showPopup,
            [name]: true
        });
    }

    const setFloating = ()=>{
        setIntersectionObserver({
            root: null,
            dom: bottomDef.current!,
            threshold: 1,
            intersectionCallback: (targ: Element, isIntersecting: boolean, rect: DOMRectReadOnly)=>{
                setFloatBox({
                    isFloat: !isIntersecting,
                    floatingBoxTop: rect.top + document.documentElement.scrollTop
                });
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
                        <div className='header'>
                            <div className='pay'>{info.payYn === 'Y' ? '??????' : '??????'}</div>
                            <div className='desc'>{info.description}</div>
                            {info.closeSoon === 'Y' ? 
                                <div className='close-soon'>????????????</div>
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
                            <div className='field'>??? ???</div>
                            <div className='val'>{info.name}</div>
                        </div>
                        <div className='row'>
                            <div className='field'>??????</div>
                            <div className='val'>{info.place}</div>
                        </div>
                        <div className='row'>
                            <div className='field'>????????????</div>
                            <div className='val'>
                                {info.people}???
                                <div className='gray'>{`(??? ??????${info.girl} ??? ??????${2})`}</div>
                                <div className='can-apply'>????????????</div>
                                <div className='gray'>{`???${(info.girl || 0) - (info.currGirl || 0)} ???${(info.boy || 0) - (info.currBoy || 0)} `}</div>
                                <Button text="??????" theme="yellow" name='modifyDate' scale={0.7} onClick={onClickModify}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='field'>??????</div>
                            <div className='val'>{(info.membershipFee || 0).toLocaleString()}</div>
                        </div>
                        <div className='row'>
                            <div className='field'>?????? ??????</div>
                            <div className='val'>10??? 30??? - 11??? 2???</div>
                        </div>
                        <div className='row'>
                            <div className='field'>?????? ??????</div>
                            <div className='val'>
                                {`${nextAct.MM}??? ${nextAct.dd}??? ${nextAct.HH} : ${nextAct.mm} ${nextAct.ampm}`} 
                                <div className='else'>??? {info.activeDateList.length - 1}</div>
                                <Button text="??????" theme="yellow" name="modifyTeam" scale={0.7} onClick={onClickModify}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='field'></div>
                            <DateButtonList activeDateList={info.activeDateList} nextActiveDate={info.nextActiveDate}/>
                        </div>
                        <div className='row'>
                            <div className='field'>??????</div>
                            <div className='val'>{info.purpose}</div>
                        </div>
                    </div>
                    <div className='active-info'>
                        <div className='title'>?????? ??????</div>
                        <div className='content'>
                            <div className='img-box'>
                                {info.subImgUrls.map(d => (
                                    <img key={d} src={d}></img>
                                ))}
                            </div>
                            <div className='desc' ref={bottomDef}>
                                {info.detailDescription}
                            </div>
                        </div>
                    </div> 
                    <div className='caution-info'>
                        <div className='text'>
                            ??? ???????????? ?????? ??? ??? ????????? ?????? ?????? ????????? ???????????????.<br/>
                            &nbsp;&nbsp;??????????????? <span>????????????</span>??? ?????? ??????????????? ??????????????????.<br/>
                            <br/>
                            ??? ?????? ??? ????????? ????????? ???????????? ???????????? ????????? ?????? ????????????.<br/>
                            <br/>
                            ??? ?????? ????????? ?????????19 ????????????????????? ????????????. ???????????? ?????? ????????? ????????? ??????<br/>
                            &nbsp;&nbsp;?????? ????????????.
                        </div>
                    </div>
                </section>
                <section className='floating-section'>
                    <GatheringFloatingBox info={info} isFloat={floatBox.isFloat} top={floatBox.floatingBoxTop}/>
                </section>
            </div>
            {showPopup.modifyDate && 
                <Popup name='modifyDate' onPopupClose={onPopupClose}>
                    <ModifyDate gatheringInfo={info}/>
                </Popup>
            }
            {showPopup.modifyTeam && 
                <Popup name='modifyTeam' onPopupClose={onPopupClose}>
                    <ModifyTeam />
                </Popup>
            }
        </div>
    );
}

const style = css`
    width: 100%;
    .wrapper {
        display: flex;
        justify-content: center;
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