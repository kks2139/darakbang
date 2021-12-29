import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {Form, FormRow, CheckBox, Combobox} from './index';
import {ChattingScheduleInputs, SelectedCombo} from '../util/interfaces';

interface Props {
    overTop: number
    onInputComplete: (param: ChattingScheduleInputs)=> void
}

function ChattingSchedule({overTop, onInputComplete}: Props){
    const [inputs, setInputs] = useState<ChattingScheduleInputs>({
        isOnline: false,
        fee: 0,
        place: '',
        description: '',
        isFree: true,
        month: 1,
    });
    const [addCount, setAddCount] = useState(1);
    const months = new Array(12).fill(0).map((a,i) => ({label: i+1+'', value: i+1}));
    const dates = new Array(31).fill(0).map((a,i) => ({label: i+1+'', value: i+1}));
    const places = [
        {value: '0', label: '관악구'},
        {value: '0', label: '마포구'},
        {value: '0', label: '강서구'},
        {value: '0', label: '강남구'},
    ];

    const onCheckChanged = (check: boolean, name: string = '')=>{
        setInputs({
            ...inputs,
            isOnline: name === 'online'
        });
    }

    const onFreeCheckChanged = (check: boolean)=>{
        setInputs({
            ...inputs,
            isFree: check,
            fee: check ? 0 : inputs.fee
        });
    }

    const onFeeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const regex = /[^0-9]/g;
        const value = e.currentTarget.value.replace(regex, '');
        setInputs({
            ...inputs,
            isFree: Number(value) <= 0,
            fee: Number(value)
        });
    }
    
    const onDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        const value = e.currentTarget.value.length > 500 ? inputs.description : e.currentTarget.value;
        setInputs({
            ...inputs,
            description: value
        });
    }

    const onAddClick = ()=>{
        setAddCount(pre => pre + 1);
    }

    const onSelected = (item: SelectedCombo | null)=>{
        if(item){
            setInputs({
                ...inputs,
                [item.name]: item.value,
            });
        }
    }
    
    const checkInputComplete = ()=>{
        const {month, date, time, place, description} = inputs; 
        if(!(month && date && time && place && description)) return;
        onInputComplete(inputs);
    }

    const style = css`
        position: absolute;
        top: ${overTop}px;
        left: 0;
        transform: translateY(calc(-100% + 1px));
        width: 100%;
        .date-box {
            .dates {
                display: flex;
                font-size: 18px;
                font-weight: bold;
                margin: 8px 0;
            }
        }
        img.add {
            width: 24px;
            object-fit: contain;
            cursor: pointer;
            margin-left: 15px;
        }
        .fee {
            color: var(--color-gray);
            font-size: 24px;
            width: 150px;
            text-align: right;
            margin-right: 25px;
        }
        .desc-box {
            position: relative;
            width: 100%;
            .desc {
                width: 100%;
                height: 100px;
                font-size: 16px;
                font-weight: bold;
                border: 1px solid var(--color-dim-gray);
                padding: 10px;
                &::placeholder {
                    color: var(--color-dim-gray);
                }
            }
            .cnt {
                position: absolute;
                bottom: 10px;
                right: 10px;
                font-size: 16px;
                font-weight: 600;
                color: var(--color-dim-gray);
            }
        }
    `;

    useEffect(()=>{
        checkInputComplete();
    }, [inputs]);

    return (
        <div css={style}>
            <Form>
                <FormRow title='온/오프라인' required={true}>
                    <div className='flex-box'>
                        <CheckBox value={inputs.isOnline} label='온라인' name='online' onCheckChanged={onCheckChanged}/>
                        <CheckBox value={!inputs.isOnline} label='오프라인' name='offline' onCheckChanged={onCheckChanged}/>
                    </div>
                </FormRow>
                <FormRow title='모임 날짜' required={true}>
                    <div className='date-box'>
                        {new Array(addCount).fill(1).map((_, i, arr) => (
                            <div key={i} className='dates'>
                                <span className='font-gray'>{new Date().getFullYear()}</span>
                                <Combobox items={months} text='월' width={100} itemStyle={{textAlign: 'right'}} name='month' onSelected={onSelected}/>
                                <Combobox items={dates} text='일' width={100} itemStyle={{textAlign: 'right'}} name='date' onSelected={onSelected}/>
                                <Combobox items={dates} text='분' width={100} itemStyle={{textAlign: 'right'}} name='time' onSelected={onSelected}/>
                                {arr.length === i + 1 && <img className='add' src='/add.png' alt='add' onClick={onAddClick}></img>}
                            </div>
                        ))}
                    </div>
                </FormRow>
                <FormRow title='회비' required={true}>
                    <input className='fee' value={inputs.fee.toLocaleString()} maxLength={9} onChange={onFeeChange}/>
                    <CheckBox value={inputs.isFree} label='없음' name='fee' onCheckChanged={onFreeCheckChanged}/>
                </FormRow>
                <FormRow title='지역' required={true}>
                    <Combobox items={places} width={200} itemStyle={{textAlign: 'center'}} name='place' onSelected={onSelected}/>
                </FormRow>
                <FormRow title='내용' required={true}>
                    <div className='desc-box'>
                        <textarea className='desc' placeholder='활동 목적과 설명을 해주면 참여율을 높일 수 있어요!' value={inputs.description} onChange={onDescChange}></textarea>
                        <div className='cnt'>{inputs.description.length}/500자</div>
                    </div>
                </FormRow>
            </Form>
        </div>
    );
}

export default ChattingSchedule;