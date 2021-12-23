import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useLocation } from 'react-router-dom';
import {Form, FormRow, CheckBox} from './index';

interface Props {
    onToolbarClicked?: ()=> void
}

interface Inputs {
    isOnline: boolean
    nextDate: string[]
    pay: number
    place: string
    description: string
}

function ChattingToolbar({onToolbarClicked}: Props){
    const [showForm, setShowForm] = useState(false);
    const [inputs, setInputs] = useState<Inputs>({
        isOnline: false,
        nextDate: [''],
        pay: 0,
        place: '',
        description: ''
    });

    const onClick = (e: React.MouseEvent<HTMLElement>)=>{
        const targ = e.target;
        if(targ instanceof HTMLImageElement && targ.closest('[data-imgbox]')){
            switch(targ.dataset.name) {
                case 'img-1':
                    break;
                case 'img-2':
                    break;
                case 'img-3':
                    setShowForm(true);
                    break;
            }
            if(onToolbarClicked) onToolbarClicked();
        }
    }

    const onCheckChanged = (check: boolean)=>{
        setInputs({
            ...inputs,
            isOnline: check
        });
    }

    const style = css`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 46px;
        border-top: 1px solid var(--color-dim-gray); 
        border-bottom: 1px solid var(--color-dim-gray); 
        background-color: var(--color-bg-gray);
        padding: 0 25px;
        img {
            cursor: pointer;
        }
        .img-box {
            display: flex;
            align-items: center;
            img {
                &:not(:last-child) {
                    margin-right: 15px; 
                }
            }
        }
        .form-box {
            position: absolute;
            top: 0;
            left: 0;
            transform: translateY(-100%);
            width: 100%;
        }
        .modal {

        }
    `;

    return (
        <div css={style} onClick={onClick}>
            <div className='img-box' data-imgbox>
                <img src='/camera.png' data-name='img-1'></img>
                <img src='/spot.png' data-name='img-2'></img>
            </div>
            <div className='img-box' data-imgbox>
                <img src='/calendar.png' data-name='img-3'></img>
            </div>
            {showForm && 
                <div className='form-box'>
                    <Form>
                        <FormRow title='온/오프라인' required={true}>
                            <div>
                                <CheckBox value={inputs.isOnline} label='온라인' name='online' onCheckChanged={onCheckChanged}/>
                            </div>
                        </FormRow>
                        <FormRow title='모임 날짜' required={true}>
                            <div>test</div>
                        </FormRow>
                        <FormRow title='회비' required={true}>
                            <div>test</div>
                        </FormRow>
                    </Form>
                </div>
            }
        </div>
    );
}

export default ChattingToolbar;