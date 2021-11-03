import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {Tab, Combobox, Tag} from '../components/index';
import {SelectedCombo, TeamLeaderInfo, TeamInfo} from '../util/interfaces';

interface Param {
    value: string
    label?: string
    name: string
}

interface Props {
    teamLeaderInfo: TeamLeaderInfo
    teamInfo: TeamInfo
    onInputChanged: (param: Param)=> void
    onComboboxSelected: (param: Param)=> void
    onMakeTeam: ()=> void
    onCancel: ()=> void
}

function MakeTeam({teamLeaderInfo, teamInfo, onComboboxSelected, onInputChanged, onMakeTeam, onCancel}: Props){
    const [wordCount, setWordCount] = useState(0);
    const testOptions = [
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Age', value: 'age'},
    ]

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        let {name, value} = e.currentTarget;

        if(name === 'purpose'){
            const over = value.length > 50;
            value = over ? teamInfo!.purpose : value
            setWordCount(pre => over ? pre : value.length);
        }
        onInputChanged({name, value});
    }

    const onSelected = (selected: SelectedCombo | null)=>{
        if(selected){
            const {value, label, name} = selected;
            onComboboxSelected({value, label, name});
        }
    }

    const onClickMakeTeam = ()=>{
        onMakeTeam();
    }
    
    const onClickCancel = ()=>{
        onCancel();
    }

    const initValue = ()=>{
        setWordCount(teamInfo.purpose.length);

    }

    useEffect(()=>{
        initValue();
    }, []);

    return (
        <div css={style}>
            <Tab names={['일반']}>
                <>
                    <div className='img-box'>
                        <div className='txt'>팀 만들기</div>
                        <label htmlFor='fileOpen'>
                            <div className='add-btn'>
                                <div className='hori'></div>
                                <div className='vert'></div>
                            </div>
                        </label>
                        <input id='fileOpen' type='file' hidden={true}></input>
                    </div>
                </>
            </Tab>
            <div className='sub-tit'>팀 소개</div>
            <div className='intro-box'>
                <div className='row'>
                    <div className='field required'>팀명</div>
                    <div className='val1'>
                        <span className='txt1'>팀</span> 
                        <span>{'{'}</span>
                        <input onChange={onChangeValue} name='teamName' value={teamInfo.teamName}></input>
                        <span>{'}'}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='field required'>카테고리</div>
                    <div className='val2'>
                        <Combobox items={testOptions} onSelected={onSelected} placeholder='1차 분류' name='filter_1' styles={{margin: '0 18px'}}></Combobox>
                        <Combobox items={testOptions} onSelected={onSelected} placeholder='2차 분류' name='filter_2' styles={{margin: '0 18px'}}></Combobox>
                        <Combobox items={testOptions} onSelected={onSelected} placeholder='3차 분류' name='filter_3' styles={{margin: '0 18px'}}></Combobox>
                    </div>
                </div>
                <div className='row'>
                    <div className='field required'>팀 목적</div>
                    <div className='val3'>
                        <span>{'“'}</span>
                            <div className='purp-box'>
                                <textarea onChange={onChangeValue} name='purpose' value={teamInfo.purpose}></textarea>
                                <div className='word-count'>{wordCount}/50자</div>
                            </div>
                        <span>{'”'}</span>
                    </div>
                </div>
            </div>
            <div className='sub-tit'>
                팀장 소개
                <span>팀장의 기본정보는 자동으로 등록됩니다.</span>
            </div>
            <div className='intro-box'>
                <div className='row'>
                    <div className='val4'>
                        <div className='attribute'>
                            <Combobox items={testOptions} onSelected={onSelected} placeholder='관련 경력' name='career' styles={{margin: '0 18px'}}></Combobox>
                        </div>
                        <div className='attribute'>
                            <div className='attr'>별명</div>
                            <div className='val'>주인장</div>
                        </div>
                        <div className='attribute'>
                            <div className='attr'>성별</div>
                            <div className='val'>남</div>
                        </div>
                    </div>
                </div>
                <div className='row noheight'>
                    <div className='field required'>성향</div>
                    <div className='tag-box'>
                        {teamLeaderInfo.propensityList.map(pro => (
                            <Tag key={pro} name={pro} selected={pro === '나익기 알바생'}></Tag>
                        ))}
                    </div>
                </div>
            </div>
            <div className='foot'>
                <div className='desc-box'>
                    <div className='desc'>• 팀에 합류하고 싶은 많은 사람이 공감할 수 있는 목적을 적어주면 좋아요!</div>
                    <div className='desc'>• 팀명은 최초 개설 후 1회 변경 가능합니다.</div>
                </div>
                <div className='btn-box'>
                    <div className='btn-done' onClick={onClickMakeTeam}>이렇게 팀 만들기</div>
                    <div className='btn-quit' onClick={onClickCancel}>오늘은 안 만들게요</div>
                </div>
            </div>
        </div>
    );
}

const style = css`
    width: 905px; 
    .img-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 0 60px 0;
        .txt {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 36px;
        }
        .add-btn {
            position: relative;
            cursor: pointer;
            width: 219px;
            height: 219px;
            border: 1px solid #C4C4C4;
            border-radius: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            > div {
                position: absolute;
                width: 50px;
                height: 2px;
                background-color: black;
            }
            .hori {
            }
            .vert {
                transform: rotate(90deg);
            }
        }
    }
    .sub-tit {
        font-size: 24px;
        font-weight: bold;
        margin: 24px 0 8px 0;
        span {
            font-weight: 500;
            font-size: 12px;
            color: var(--color-gray);
            margin-left: 19px;
        }
    }
    .intro-box {
        border: 1px solid var(--color-gray);
        border-bottom: transparent;
        .row {
            display: flex;
            height: 92px;
            border-bottom: 1px solid var(--color-gray); 
            .field {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 105px;
                margin-left: 67px;
                font-size: 24px;
                font-weight: bold;
            }
            > [class*='val'] {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-grow: 1;
            }
            .val1 {
                .txt1 {
                    margin-right: 12px;
                }
                span {
                    font-size: 24px;
                    font-weight: 500;
                }
                input {
                    width: 221px;
                    text-align: center;
                    margin: 0 30px;
                    font-size: 24px;
                    font-weight: 600;
                }
            }
            .val2 {
                // justify-content: space-around;
            }
            .val3 {
                font-size: 36px;
                font-weight: bold;
                .purp-box {
                    position: relative;
                    textarea {
                        min-width: 500px;
                        height: 65px;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 30px;
                        padding: 0 30px;
                        border-bottom: 1px solid #C4C4C4;
                    }
                    .word-count {
                        position: absolute;
                        right: 0;
                        transform: translate(50px, -22px);
                        font-size: 12px;
                        color: var(--color-dim-gray);
                    }
                }
            }
            .val4 {
                align-items: stretch;
                .attribute {
                    width: 302px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    &:not(:last-child) {
                        border-right: 1px solid var(--color-gray); 
                    }
                    > div {
                        color: var(--color-gray);
                    }
                    .attr {
                        font-weight: 600;
                        font-size: 24px;
                        margin-bottom: 12px;
                    }
                }
            }
            .tag-box {
                display: flex;
                flex-wrap: wrap;
                padding: 20px 0;
            }
        }
        .noheight {
            height: unset !important; 
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
                background-color: var(--color-yellow);
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

export default MakeTeam;