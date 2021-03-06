import React, { useEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {Tab, Combobox, Tag, RedBox, Button, Input, Textarea, Popup} from '../index';
import {SelectedCombo} from '../../util/interfaces';
import {validateInputs} from '../../util/util';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {makeTeamActions} from '../../store/makeTeam';
import {appActions} from '../../store/app';
import {RootState} from '../../store/index';

interface Param {
    value: string | number
    label?: string
    name: string
}

function MakeTeam(){
    const history = useHistory();
    const dispatch = useDispatch();
    const {teamLeaderInfo, teamInfo} = useSelector((state: RootState)=> state.makeTeam);
    const [wordCount, setWordCount] = useState(0);
    const [isValid, setIsValid] = useState(true);
    const formRef = useRef<HTMLFormElement>(null);
    
    const testOptions = [
        {label: '항목 1', value: 'val_1'},
        {label: '항목 2', value: 'val_2'},
        {label: '항목 3', value: 'val_3'},
    ]

    const onCancel = ()=>{
        history.goBack();
    }

    const onTeamInfoChanged = (param: Param)=>{
        const {value, name} = param;
        const obj = {
            ...teamInfo,
            [name]: value
        };
        dispatch(makeTeamActions.setTeamInfo(obj));
    }

    const onTeamLeaderInfoChanged = (param: Param)=>{
        const {value, name} = param;
        const obj = {
            ...teamLeaderInfo,
            [name]: value
        };
        dispatch(makeTeamActions.setTeamLeaderInfo(obj));
    }

    const onMakeTeam = ()=>{
        history.push('/make-team/done');
    }

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        let {name, value} = e.currentTarget;

        if(name === 'purpose'){
            const over = value.length > 50;
            value = over ? teamInfo!.purpose : value
            setWordCount(pre => over ? pre : value.length);
        }
        onTeamInfoChanged({name, value});
    }

    const onSelected = (selected: SelectedCombo)=>{
        if(selected){
            const {value, label, name} = selected;
            if(name === 'career'){
                onTeamLeaderInfoChanged({value, name});
            }else{
                onTeamInfoChanged({value, name});
            }
        }
    }

    const onClickMakeTeam = (e: React.MouseEvent)=>{
        e.preventDefault();
        let valid = false;
        if(validateInputs(formRef.current!)){
            onMakeTeam();
            valid = true;
        }
        setIsValid(valid);
    }
    
    const initValue = ()=>{
        setWordCount(teamInfo.purpose.length);
    }

    useEffect(()=>{
        initValue();
    }, []);

    return (
        <form css={style(isValid)} ref={formRef}>
            <Tab names={['일반']} subNames={['팀 만들기', '완료']} selectedSubIndex={0}>
                <div className='img-box'>
                    <h2 className='txt'>팀 만들기</h2>
                    <label htmlFor='fileOpen'>
                        <div className='add-btn'>
                            <div className='hori'></div>
                            <div className='vert'></div>
                        </div>
                    </label>
                    <input id='fileOpen' type='file' hidden={true}></input>
                </div>
            </Tab>
            <h3 className='sub-tit'>팀 소개</h3>
            <div className='intro-box'>
                <div className='row'>
                    <div className='field red-star'>팀명</div>
                    <div className='val1'>
                        <span className='txt1'>팀</span> 
                        <span>{'{'}</span>
                        <Input onChange={onChangeValue} name='teamName' value={teamInfo.teamName} required noBorder={true}/>
                        <span>{'}'}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='field red-star'>카테고리</div>
                    <div className='val2'>
                        <Combobox items={testOptions} onSelected={onSelected} placeholder='1차 분류' name='filter_1' required comboboxStyle={{margin: '0 18px'}}></Combobox>
                        <Combobox items={testOptions} onSelected={onSelected} placeholder='2차 분류' name='filter_2' required comboboxStyle={{margin: '0 18px'}}></Combobox>
                        <Combobox items={testOptions} onSelected={onSelected} placeholder='3차 분류' name='filter_3' required comboboxStyle={{margin: '0 18px'}}></Combobox>
                    </div>
                </div>
                <div className='row'>
                    <div className='field red-star'>팀 목적</div>
                    <div className='val3'>
                        <span>{'“'}</span>
                            <div className='purp-box'>
                                <Textarea onChange={onChangeValue} name='purpose' required value={teamInfo.purpose}/>
                                <div className='word-count'>{wordCount}/50자</div>
                            </div>
                        <span>{'”'}</span>
                    </div>
                </div>
            </div>
            <h3 className='sub-tit'>
                팀장 소개
                <span>팀장의 기본정보는 자동으로 등록됩니다.</span>
            </h3>
            <div className='intro-box'>
                <div className='row'>
                    <div className='val4'>
                            <div className='attribute'>
                                <Combobox items={testOptions} onSelected={onSelected} placeholder='관련 경력' name='career' required={true} defaultValue={teamLeaderInfo.career} comboboxStyle={{margin: '0 18px'}}></Combobox>
                            </div>
                        <div className='attribute'>
                            <div className='attr'>별명</div>
                            <div className='val'>{teamLeaderInfo.nickname}</div>
                        </div>
                        <div className='attribute'>
                            <div className='attr'>성별</div>
                            <div className='val'>{teamLeaderInfo.gender}</div>
                        </div>
                    </div>
                </div>
                <div className='row noheight'>
                    <div className='field red-star'>성향</div>
                    <div className='tag-box'>
                        {teamLeaderInfo.propensityList.map(pro => (
                            <Tag key={pro} name={pro} selected={pro === '나익기 알바생'}></Tag>
                        ))}
                    </div>
                </div>
            </div>
            <div className='warn-box'>
                * 필수 입력 사항을 확인해주세요.
            </div>
            <div className='foot'>
                <div className='desc-box'>
                    <div className='desc'>• 팀에 합류하고 싶은 많은 사람이 공감할 수 있는 목적을 적어주면 좋아요!</div>
                    <div className='desc'>• 팀명은 최초 개설 후 1회 변경 가능합니다.</div>
                </div>
                <div className='btn-box'>
                    <Button text="이렇게 팀 만들기" onClick={onClickMakeTeam} styles={{marginBottom: '10px'}}/>
                    <div className='btn-quit' onClick={onCancel}>오늘은 안 만들게요</div>
                </div>
            </div>
        </form>
    );
}

const style = (isValid: boolean)=> (css`
    width: 100%; 
    position: relative;
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
        border: 1px solid var(--color-dim-gray);
        border-bottom: transparent;
        background-color: white;
        .row {
            display: flex;
            height: 92px;
            border-bottom: 1px solid var(--color-dim-gray); 
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
                        border-right: 1px solid var(--color-dim-gray); 
                    }
                    .attr {
                        color: var(--color-gray);
                        font-weight: 600;
                        font-size: 24px;
                        margin-bottom: 12px;
                    }
                    .val {
                        color: var(--color-gray);
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
            .btn-quit {
                font-size: 16px;
                font-weight: bold;
                color: var(--color-gray);
                cursor: pointer;
            }
        }
    }
    .warn-box {
        position: absolute;
        display: ${isValid ? 'none' : 'flex'};
        margin-top: 10px;
        color: #FF0000;
        font-weight: bold;
        font-size: 16px;
    }
`);

export default MakeTeam;