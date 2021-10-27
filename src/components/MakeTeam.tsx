import React from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {Tab} from '../components/index';

interface Props {

}

function MakeTeam({}: Props){
    return (
        <div css={style}>
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
                    <div className='field'>팀명</div>
                    <div className='desc'></div>
                </div>
                <div className='row'>
                    <div className='field'>카테고리</div>
                    <div className='desc'></div>
                </div>
                <div className='row'>
                    <div className='field'>팀 목적</div>
                    <div className='desc'></div>
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
        border: 1px solid #9D9D9D;
        border-bottom: transparent;
        .row {
            display: flex;
            height: 92px;
            border-bottom: 1px solid #9D9D9D; 
            .field {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 67px;
                font-size: 24px;
                font-weight: bold;
            }
            .desc {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .wall {
                height: 100%;
                width: 1px;
                background-color: #9D9D9D;
            }
        }
    }
`;

export default MakeTeam;