import React, { useState, useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {GatheringInfo} from '../../util/interfaces';
import {FiUpload, FiPocket} from 'react-icons/fi';
import {GoThumbsup, GoThumbsdown} from 'react-icons/go';
import {divDate} from '../../util/util';
import {useDispatch} from 'react-redux';
import {appActions} from '../../store/app';

interface Props {
    info: GatheringInfo
    isFloat: boolean
}

function GatheringFloatingBox({info, isFloat}: Props){
    const dispatch = useDispatch();
    const initDate = divDate(info?.initDate || '');
    const lastActiveDate = divDate(info?.lastActiveDate || '');
    const isOnce = info?.filter.includes('한 번 만남');

    const onClickJoin = (e: React.MouseEvent<HTMLDivElement>)=>{
        const {type} = e.currentTarget.dataset;
        dispatch(appActions.toggleConfirmMessage({
            title: `참여 하시려는 활동의 내용이 맞는지
            마지막으로 확인해 주세요!`,
            subTitle: '다락방',
            msg: `
                ${info?.place}
                ${type === 'once' ? '한 번 참여' : ''}
                ${info?.nextActiveDate}`,
            confirmText: '확인',
            show: true,
            confirmCallback: nextStep
        }));
    }

    const nextStep = ()=>{

    }
    
    const onClickIcon = (e: React.MouseEvent<HTMLDivElement>)=>{
        const {type} = e.currentTarget.dataset;
        if(type === 'share'){
    
        }else{
    
        }
    }

    const style = css`
        position: ${isFloat ? 'fixed' : 'relative'};
        top: ${isFloat ? '60px' : '40px'};
        transition: .3s;
        .title {
            font-weight: bold;
            font-size: 24px;
            margin-bottom: 16px;
        }
        .content {
            width: 265px;
            padding: 12px;
            border: 1px solid #C4C4C4;
            border-radius: 10px;
            background-color: white;
            margin-bottom: 12px;
            .interests {
                color: var(--color-gray);
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
                    color: var(--color-gray);
                    margin-top: 5px;
                }
            }
            .line1 {
                transform: translateX(-12px);
                width: calc(100% + 24px);
                margin: 12px 0 24px 0;
                height: 1px;
                background-color: #C4C4C4;
            }
            .line2 {
                margin-bottom: 20px;
                height: 1px;
                background-color: #C4C4C4;
            }
            .likes {
                display: flex;
                justify-content: center;
                margin-bottom: 40px;
                color: var(--color-gray);
                font-size: 24px;
                > div {
                    margin: 0 25px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .good {
                    color: var(--color-main-text);
                }
            }
        }
        .icons {
            display: flex;
            justify-content: center;
            margin-top: 19px;
            .icon {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0 12px;
                cursor: pointer;
                .txt {
                    font-size: 16px;
                }
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
            background-color: var(--color-yellow);
            cursor: pointer;
        }
        .btn.once {
            background-color: var(--color-peach);
        }
        .once-box {
            .txt {
                text-align: center;
                font-size: 8px;
                color: var(--color-gray);
                margin-top: 4px;
            }
        }
    `;

    return (
        <div css={style}>
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
                    <div className='good'>
                        <GoThumbsup size='20'/>
                        <div>{info.likes}</div>
                    </div>
                    <div className='bad'>
                        <GoThumbsdown size='20'/>
                        <div>{info.hates}</div>
                    </div>
                </div>
                <div className='btn' onClick={onClickJoin}>이 팀에 합류하기</div>
            </div>
            {isOnce ? 
                <div className='once-box'>
                    <div className='btn once' data-type='once' onClick={onClickJoin}>한 번 참여하기</div>
                    <div className='txt'>• 한 번 만남이 가능한 게시물입니다.</div>
                </div>
            : null}
            <div className='icons'>
                <div className='icon' data-type='share' onClick={onClickIcon}>
                    <FiUpload size='25'/>
                    <div className='txt'>공유하기</div>
                </div>
                <div className='icon' data-type='pocket' onClick={onClickIcon}>
                    <FiPocket size='25'/>
                    <div className='txt'>주머니 담기</div>
                </div>
            </div>
        </div>
    );
}

export default GatheringFloatingBox;