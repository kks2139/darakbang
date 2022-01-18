import React from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {Tab, Tag, Combobox} from '../index';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/index';
import {useHistory} from 'react-router-dom';

function MakeTeamDone(){
    const history = useHistory();
    const {teamInfo, teamLeaderInfo} = useSelector((state: RootState)=> state.makeTeam);
    const testOptions = [
        {label: '항목 1', value: 'val_1'},
        {label: '항목 2', value: 'val_2'},
        {label: '항목 3', value: 'val_3'},
    ]

    const onOpenActivity = ()=>{
        alert('개발중!');
        // dispatch(toggleConfirmMessage({
        //     title: '내 팀에 함께 할 팀원을 모집해보세요!',
        //     confirmText: '팀원 모집하기'
        // }));
    }

    const onCancel = ()=>{
        history.goBack();
    }

    const onClickDoen = ()=>{
        onOpenActivity();
    }
    
    return (
        <div css={style}>
            <Tab names={['일반']} subNames={['팀 만들기', '완료']} selectedSubIndex={1}>
                <>
                    <div className='team-info-box'>
                        <div className='title'>팀 만들기 완료</div>
                        <div className='img-box'>
                            <div className='preview'>
                                <img src='/sample.png'></img>
                                <div className='team-name'>{teamInfo?.teamName}</div>
                            </div>
                        </div>
                        <div className='desc-box'>
                            <div className='category'>
                                <Combobox items={testOptions} readOnly={true} defaultValue={teamInfo.filter_1}/>
                                <span>〉</span>
                                <Combobox items={testOptions} readOnly={true} defaultValue={teamInfo.filter_2}/>
                                <span>〉</span>
                                <Combobox items={testOptions} readOnly={true} defaultValue={teamInfo.filter_3}/>
                            </div>
                            <div className='purpose'>
                                <span>{'“'}</span>
                                <textarea value={teamInfo.purpose} readOnly></textarea>
                                <span>{'”'}</span>
                            </div>
                        </div>
                    </div>
                </>
            </Tab> 
            <div className='team-leader-info-box'>
                <div className='block'>
                    <div className='attr'>
                        별명
                    </div>
                    <div className='val'>
                        {teamLeaderInfo.nickname}
                    </div>
                </div>
                <div className='block'>
                    <div className='attr'>
                        성별
                    </div>
                    <div className='val'>
                        {teamLeaderInfo.gender}
                    </div>
                </div>
                <div className='block'>
                    <div className='attr'>
                        관련 경력
                    </div>
                    <div className='val'>
                        <Combobox items={testOptions} readOnly={true} defaultValue={teamLeaderInfo.career} comboboxStyle={{width: '90px'}}/>
                    </div>
                </div>
                <div className='block'>
                    <div className='attr'>
                        성향
                    </div>
                    <div className='val'>
                        <Tag name={teamLeaderInfo.propensity} selected={false}></Tag>
                    </div>
                </div>
            </div>
            <div className='foot'>
                <div className='desc-box'>
                    <div className='desc'>• 팀에 합류하고 싶은 많은 사람이 공감할 수 있는 목적을 적어주면 좋아요!</div>
                    <div className='desc'>• 팀명은 최초 개설 후 1회 변경 가능합니다.</div>
                </div>
                <div className='btn-box'>
                    <div className='btn-done' onClick={onClickDoen}>팀원 모집하기</div>
                    <div className='btn-quit' onClick={onCancel}>오늘은 안 만들게요</div>
                </div>
            </div>
        </div>
    );
}

const style = css`
    width: 905px; 
    .team-info-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
            font-size: 36px;
            font-weight: bold;
            margin: 80px 0 36px 0;
        }
        .img-box {
            .preview {
                position: relative;
                width: 219px;
                height: 219px;
                border: 1px solid #C4C4C4;
                border-radius: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                img {
                    width: 185%;
                }
                .team-name {
                    position: absolute;
                    bottom: 16px;
                    font-size: 24px;
                    font-weight: bold;
                }
            }
            margin-bottom: 24px;
        }
        .desc-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            .category {
                display: flex;
                font-size: 24px;
                color: var(--color-gray);
                margin-bottom: 24px;
                span {
                    margin: 0 12px 0 5px; 
                }
            }
            .purpose {
                display: flex;
                align-items: center;
                margin-bottom: 16px;
                span {
                    font-size: 36px;
                    font-weight: bold;
                }
                textarea {
                    width: 486px;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 30px;
                    margin: 0 24px;
                }
            }
        }
    }
    .team-leader-info-box {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        .block {
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 220px;
            height: 92px;
            border: 1px solid var(--color-dim-gray);
            > div {
                font-size: 22px;
            }
            .attr {
                font-weight: bold;
                margin-right: 12px;
            }
            .val {
                color: var(--color-gray);
            }
        }
    }
    .foot {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        .desc-box {
            margin-top: 20px;
            .desc {
                font-size: 16px;
                font-weight: 500;
                line-height: 26px;
                color: var(--color-gray);
            }
        }
        .btn-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            .btn-done {
                font-size: 24px;
                font-weight: 500;
                padding: 16px 36px;
                color: white;
                background-color: var(--color-main-text);
                border: 1px solid black;
                border-radius: 50px;
                margin-bottom: 8px;
                cursor: pointer;
            }
            .btn-quit {
                font-size: 16px;
                font-weight: bold;
                color: var(--color-dim-gray);
                cursor: pointer;
            }
        }
    }
`;

export default MakeTeamDone;