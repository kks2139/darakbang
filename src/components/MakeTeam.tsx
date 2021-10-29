import React, { useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {Tab, Combobox} from '../components/index';
import {ComboboxItem} from '../util/interfaces';

interface Inputs {
    teamName: string
    category: string
    purpose: string
}

interface Props {

}

function MakeTeam({}: Props){
    const [inputs, setInputs] = useState<Inputs>({
        teamName: '',
        category: '',
        purpose: '',
    });

    const testOptions = [
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Age', value: 'age'},
    ]

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>)=>{

    }

    const onSelected = (selected: ComboboxItem)=>{
        setInputs({
            ...inputs,
            teamName: selected.label
        });
    }

    return (
        <div css={style}>
            <Combobox items={testOptions} onSelected={onSelected}></Combobox>
            <Tab names={['일반']}>
                <>
                    <div className='img-box'>
                        <div className='txt'>팀 만들기</div>
                        <div className='add-btn'>
                            <div className='hori'></div>
                            <div className='vert'></div>
                        </div>
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
                        <input onChange={onChangeValue}></input>
                        <span>{'}'}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='field required'>카테고리</div>
                    <div className='val2'></div>
                </div>
                <div className='row'>
                    <div className='field required'>팀 목적</div>
                    <div className='val3'></div>
                </div>
            </div>
            <div className='sub-tit'>팀장 소개</div>
            <div className='intro-box'>

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
                justify-content: center;
                align-items: center;
                margin-left: 67px;
                font-size: 24px;
                font-weight: bold;
            }
            [class*='val'] {
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

            }
            .val3 {

            }
            .wall {
                height: 100%;
                width: 1px;
                background-color: var(--color-gray);
            }
        }
    }
`;

export default MakeTeam;