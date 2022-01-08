import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {CheckBox, Combobox} from '../index';
import {SelectedCombo} from '../../util/interfaces';
import CSS from 'csstype';

interface Inputs {
    female: boolean
    femaleNum: number
    male: boolean
    maleNum: number
    none: boolean
    noneNum: number
}

function ModifyTeam(){
    const [inputs, setInputs] = useState<Inputs>({
        female: false,
        femaleNum: 0,
        male: false,
        maleNum: 0,
        none: false,
        noneNum: 0,
    });
    const items = [
        {value: 1, label: '1'},
        {value: 2, label: '2'},
        {value: 3, label: '3'},
        {value: 4, label: '4'},
        {value: 5, label: '5'},
    ];
    const itemStyle: CSS.Properties = {
        fontWeight: 'bold',
        textAlign: 'center'
    };

    const onCheckChanged = (value: boolean, name: string | undefined = '')=>{
        setInputs({
            ...inputs,
            [name]: value
        });
    }
    
    const onSelected = (selected: SelectedCombo | null)=>{
        const {name, value} = selected!;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onClickButton = ()=>{

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
            input {
                text-align: right;
            }
            .inputs {
                display: flex;
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
            margin: 50px 0;
            transition: .2s;
            cursor: pointer;
            &:hover {
                box-shadow: 0 0 0 1px black;
            }
        }
    `;

    return (
        <div css={style}>
            <div className='title'>희망 팀원 수정</div>
            <div className='content'>
                <div className='inputs'>
                    <CheckBox label='여성' name='female' value={inputs.female} onCheckChanged={onCheckChanged}/>
                    <Combobox name='femaleNum' items={items} onSelected={onSelected} itemStyle={itemStyle}/>
                    <CheckBox label='남성' name='male' value={inputs.male} onCheckChanged={onCheckChanged}/>
                    <Combobox name='maleNum' items={items} onSelected={onSelected} itemStyle={itemStyle}/>
                    <CheckBox label='무관' name='none' value={inputs.none} onCheckChanged={onCheckChanged}/>
                    <Combobox name='noneNum' items={items} onSelected={onSelected} itemStyle={itemStyle}/>
                </div>
                <button className='btn' onClick={onClickButton}>완료</button>
                <div className='foot'>
                    * 희망 정원이 변경 시 모든 일정에 반영됩니다.<br/>
                    &nbsp;&nbsp;&nbsp;특정 날짜에 추가모집을 원하시는 경우, 새로운 팀원 모집글을 업로드 해주세요. 
                </div>
            </div>
        </div>
    );
}

export default ModifyTeam;