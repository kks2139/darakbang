import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {DateButtonList} from '../index';
import {GatheringInfo} from '../../util/interfaces';

interface Props {
    gatheringInfo: GatheringInfo
}

function ModifyDate({gatheringInfo}: Props){
    const {activeDateList, nextActiveDate} = gatheringInfo;

    const onClickImg = ()=>{

    }

    const style = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 800px;
        .title {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            .add {
                margin: 15px 0 50px 0;
                cursor: pointer;
            }
            .foot {
                width: 480px;
                margin: 50px 0 80px 0;
                line-height: 20px;
                font-size: 12px;
                font-weight: bold;
                span {
                    color: var(--color-gray);
                }
            }
        }
        .btn {
            padding: 16px 30px;
            border: 1px solid black;
            border-radius: 25px;
            background-color: var(--color-main-text);
            color: white;
            font-size: 24px;
            transition: .2s;
            cursor: pointer;
            &:hover {
                box-shadow: 0 0 0 1px black;
            }
        }
    `;

    return (
        <div css={style}>
            <div className='title'>활동 날짜 수정</div>
            <div className='content'>
                <DateButtonList activeDateList={activeDateList} nextActiveDate={nextActiveDate} readOnly={true}/>
                <img className='add' src='/add.png' alt='추가' onClick={onClickImg}></img>
                <button className='btn'>완료</button>
                <div className='foot'>
                    * 정원 달성 후 마감 된 모임은 마감을 해지할 수 없습니다.<br/>
                    &nbsp;&nbsp;&nbsp;해당 날짜에 추가 인원을 모집하고 싶을 경우 새로운 모집글을 업로드 하시거나,<br/>
                    &nbsp;&nbsp;&nbsp;희망 팀원의 정원을 더 높은 값으로 입력해주세요.<br/>
                    &nbsp;&nbsp;&nbsp;<span>( 단, 해당 값은 모든 활동 일자에 적용됩니다. )</span><br/><br/>

                    * 팀장의 권한으로 일정은 조기마감 설정할 수 있습니다.<br/><br/>

                    * 새로운 날짜에 추가 일정을 등록할 수 있습니다.
                </div>
            </div>
        </div>
    );
}

export default ModifyDate;