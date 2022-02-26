import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import { ComboboxItem, SelectedCombo} from "../../util/interfaces";
import {Combobox, CheckBox, Button, Textarea} from '../index';
import {validateInputs} from '../../util/util';

interface Props {
    onClickSend: ()=>void
}

const ITEMS_1 = [
    {value: '욕설', label: '욕설'},
    {value: '비매너', label: '비매너'},
    {value: '기타', label: '기타'},
]
const ITEMS_2 = [
    {value: '사유1', label: '사유1'},
    {value: '사유2', label: '사유2'},
    {value: '사유3', label: '사유3'},
]

function Accuse({onClickSend}: Props){
    const divRef = useRef<HTMLDivElement>(null);

    const [inputs, setInputs] = useState({
        type: '',
        reason: '',
        detail: '',
        noSee: false
    });

    const onComboSelected = (param: SelectedCombo)=>{
        const {value, name} = param;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }
    
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        const {value, name} = e.currentTarget;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }
    
    const onCheckChange = (value: boolean)=>{
        setInputs({
            ...inputs,
            noSee: value,
        });
    }

    const onClick = ()=>{
        if(validateInputs(divRef.current!)){
            onClickSend();
        }
    }

    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        padding: 10px;

        h2 {
            margin-bottom: 30px;
        }
    `;

    const comboStyle = {
        marginBottom: '30px', 
    }
    const textareaStyle = {
        width: '100%',
        height: '200px',
        marginBottom: '25px',
    }
    const buttonStyle = {
        margin: '25px',
    }

    return (
        <div css={style} ref={divRef}> 
            <h2>신고하기</h2>
            <Combobox name='type' items={ITEMS_1} placeholder='신고유형' width={350} onSelected={onComboSelected} comboboxStyle={comboStyle} required={true}/>
            <Combobox name='reason' items={ITEMS_2} placeholder='사유' width={350} onSelected={onComboSelected} comboboxStyle={comboStyle} required={true}/>
            <Textarea value={inputs.detail} placeholder='신고 사유의 자세한 내용을 적어주세요.' name='detail' showLength={true} maxLength={200} onChange={onChange} customStyle={textareaStyle} required={true}/>
            <CheckBox name='check' label='이 팀 다시 만나지 않기' value={inputs.noSee} onCheckChanged={onCheckChange}/>
            <Button text='신고 전송' onClick={onClick} styles={buttonStyle}/>
        </div>
    );
}


export default Accuse;