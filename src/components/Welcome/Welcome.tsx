import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {Button} from '../index';
import {Link} from 'react-router-dom';

function Welcome(){
    const buttonSize = 80;
    const innerSize = 74;

    const onClickButton = ()=>{

    }

    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;

        .center {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px 0 60px 0;
        }

        h3 {
            margin-bottom: 20px;
        }

        .btn-to-main {
            display: flex;
            justify-content: center;
            align-items: center;
            
            position: relative;
            width: 0;
            height: 0;
            margin: 100px 0;

            &::before {
                position: absolute;
                transform: translate(-50%);
                content: '';
                border-top: ${buttonSize / 2}px solid transparent;
                border-right: ${buttonSize}px solid var(--color-main-text);
                border-bottom: ${buttonSize / 2}px solid transparent;
            }
            
            &::after {
                position: absolute;
                transform: translate(50%);
                content: '';
                border-top: ${buttonSize / 2}px solid transparent;
                border-left: ${buttonSize}px solid var(--color-main-text);
                border-bottom: ${buttonSize / 2}px solid transparent;
            }

            .innerRect {
                display: flex;
                justify-content: center;
                align-items: center;
                
                position: absolute;
                width: 0;
                height: 0;

                &::before {
                    position: absolute;
                    transform: translate(-50%);
                    content: '';
                    border-top: ${innerSize / 2}px solid transparent;
                    border-right: ${innerSize}px solid white;
                    border-bottom: ${innerSize / 2}px solid transparent;
                }
                
                &::after {
                    z-index: 1;
                    position: absolute;
                    transform: translate(50%);
                    content: '';
                    border-top: ${innerSize / 2}px solid transparent;
                    border-left: ${innerSize}px solid white;
                    border-bottom: ${innerSize / 2}px solid transparent;
                }   
            }

            .text {
                z-index: 2;
                position: absolute;
                width: 100px;
                text-align: center;
                font-size: 20px;
                color: black;
                font-weight: bold;
            }
        }
    `;

    return (
        <div css={style}>
            <div className='center'>
                <h1>환영합니다!</h1>
                <h1>다락방 회원가입 완료!</h1>
            </div>
            <div className='center'>
                <h3>나와 함께할 팀원을 모집하고 싶다면?</h3>
                <Link to='/make-team'>
                    <Button text='팀 만들기' theme='blue'/>
                </Link>
            </div>
            <div className='center'>
                <h3>관심있는 활동을 나와 잘 맞는 사람들과 하고싶다면?</h3>
                <Link to='/gathering'>
                    <Button text='팀 가입하기' theme='yellow'/>
                </Link>
            </div>
            <Link to='/' className='btn-to-main'>
                <div className='innerRect'></div>
                <div className='text'>메인으로</div>
            </Link>
        </div>
    );
}

export default Welcome;