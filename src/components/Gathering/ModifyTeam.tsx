import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {CheckBox, Combobox, Button, Input, Popup} from '../index';
import {SelectedCombo} from '../../util/interfaces';
import CSS from 'csstype';

interface Inputs {
    female: boolean
    femaleNum: number
    male: boolean
    maleNum: number
    none: boolean
    noneNum: number
    [key: string]: any
}

function ModifyTeam(){
    const [showPopup, setShowPopup] = useState(false);
    const [inputs, setInputs] = useState<Inputs>({
        female: false,
        femaleNum: 0,
        male: false,
        maleNum: 0,
        none: false,
        noneNum: 0,
    });
    const inputStyle = {
        width: '80px',
        height: '20px',
        marginLeft: '10px',
    }

    const onCheckChanged = (value: boolean, name: string | undefined = '')=>{
        if(name === 'none'){
            inputs.female = false;
            inputs.femaleNum = 0;
            inputs.male = false;
            inputs.maleNum = 0;
        }else{
            inputs.none = false;
            inputs.noneNum = 0;
            inputs[name + 'Num'] = 0;
        }

        setInputs({
            ...inputs,
            [name]: value
        });
    }
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>, name: string)=>{
        setInputs({
            ...inputs,
            [name]: e.currentTarget.value
        });
    }

    const onClickButton = ()=>{
        setShowPopup(true);
    }

    const onPopupClose = ()=>{
        setShowPopup(false);
    }
    
    const onClickConfirm = ()=>{

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
        }
        
        .inputs {
            display: flex;
            justify-content: space-between;
            width: 550px;
            > div {
                display: flex;
            }
        }

        .foot {
            width: 480px;
            margin: 50px 0 80px 0;
            line-height: 20px;
            font-size: 13px;
            font-weight: bold;
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

        .confirm-box {
            width: 600px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .btn-box {
                display: flex;
            }
        }
    `;

    return (
        <div css={style}>
            <div className='title'>?????? ?????? ??????</div>
            <div className='content'>
                <div className='inputs'>
                    <div>
                        <CheckBox label='??????' name='female' value={inputs.female} onCheckChanged={onCheckChanged}/>
                        <Input name='femaleNum' value={inputs.femaleNum} onChange={onChange} type='number' maxValue={100} minValue={0} customStyle={inputStyle} disabled={!inputs.female}/>
                    </div>
                    <div>
                        <CheckBox label='??????' name='male' value={inputs.male} onCheckChanged={onCheckChanged}/>
                        <Input name='maleNum' value={inputs.maleNum} onChange={onChange} type='number' maxValue={100} minValue={0} customStyle={inputStyle} disabled={!inputs.male}/>
                    </div>
                    <div>
                        <CheckBox label='??????' name='none' value={inputs.none} onCheckChanged={onCheckChanged}/>
                        <Input name='noneNum' value={inputs.noneNum} onChange={onChange} type='number' maxValue={100} minValue={0} customStyle={inputStyle} disabled={!inputs.none}/>
                    </div>
                </div>
                <Button text='??????' onClick={onClickButton} styles={{marginTop: '30px'}}/>

                <div className='foot'>
                    * ?????? ????????? ?????? ??? ?????? ????????? ???????????????.<br/>
                    &nbsp;&nbsp;&nbsp;?????? ????????? ??????????????? ???????????? ??????, ????????? ?????? ???????????? ????????? ????????????. 
                </div>
            </div>
            {showPopup && 
                <Popup onPopupClose={onPopupClose}>
                    <h2>?????? ???????????????????</h2>
                </Popup>
            }
        </div>
    );
}

export default ModifyTeam;