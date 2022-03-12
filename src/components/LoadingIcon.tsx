import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import ReactDOM from 'react-dom';

function LoadingIcon(){
    const style = css`
        --brown: #a37950;
        --spread-start: -30px;
        --spread-end: -40px;
        --grow-for: 1.5s;

        /* 전체 화면 모달용 */
        /* z-index: 9999;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgb(0,0,0,0.3); */
        
        position: relative;
        margin: auto;
        
        display: flex;
        justify-content: center;
        align-items: center;

        > .wrapper {
            position: relative;
            width: 22px;
            height: 22px;
        }

        .seed {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: var(--brown);
            border: 1px solid black;
            border-radius: 0 20px 0 20px;
            animation: shake 1s linear infinite;
            .line {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 28px;
                height: 5px;
                border-radius: 50%;
                border: 1px solid black;
                transform: translate(-50%, -50%) rotate(45deg);
            }
        }

        .effect {
            z-index: 2;
            position: absolute;
            top: 35%;
            left: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            
            > div{
                position: absolute;
                width: 2px;
                height: 10px;
                border-radius: 3px;
                /* background-color: #0ce563; */
                background-color: black;

                
                &:nth-child(1){
                    animation: spread-1 var(--grow-for) infinite;
                    transform: translateY(var(--spread-start));
                }
                &:nth-child(2){
                    transform: rotate(90deg) translateY(var(--spread-start));
                    animation: spread-2 var(--grow-for) infinite;
                }
                &:nth-child(3){
                    transform: rotate(180deg) translateY(var(--spread-start));
                    animation: spread-3 var(--grow-for) infinite;
                }
                &:nth-child(4){
                    transform: rotate(270deg) translateY(var(--spread-start));
                    animation: spread-4 var(--grow-for) infinite;
                }
                animation-timing-function: cubic-bezier(.15,-0.03,.75,0);
            }

            &.clone {
                transform: rotate(45deg);
            }
        }

        .sprout {
            position: absolute;
            top: -10px;
            left: 50%;
            width: 100%;
            height: 100%;

            .body {
                position: absolute;
                width: 2px;
                height: 20px;
                transform: translate(-50%);
                border-radius: 3px;
                /* border: 1px solid green; */
                background-color: black;
            }
            .leaf {
                position: absolute;
                top: 1px;
                width: 22px;
                height: 15px;
                background-color: #46e795;
                border: 1px solid black;

                .line {
                    position: absolute;
                    width: 24px;
                    height: 1px;
                    background-color: black;
                }

                &.left {
                    border-radius: 28px 0 28px 0;
                    transform: translate(0, -100%);
                    .line {
                        top: 0;
                        right: 0;
                        transform: rotate(-32deg);  
                        transform-origin: 100% top;
                    }
                }
                
                &.right {
                    border-radius: 0 28px 0 28px;
                    transform: translate(-100%, -100%);
                    .line {
                        top: 0;
                        left: 0;
                        transform: rotate(32deg);  
                        transform-origin: 0 top;
                    }
                }
            }
            animation: grow var(--grow-for) infinite;
        }

        @keyframes spread-1 {
            0% {}
            70%{
                opacity: 1;
            }
            100% {
                height: 0;
                opacity: 0;
                transform: translateY(var(--spread-end));
            }
        }
        @keyframes spread-2 {
            0% {}
            70%{
                opacity: 1;
            }
            100% {
                height: 0;
                opacity: 0;
                transform: rotate(90deg) translateY(var(--spread-end));
            }
        }
        @keyframes spread-3 {
            0% {}
            70%{
                opacity: 1;
            }
            100% {
                height: 0;
                opacity: 0;
                transform: rotate(180deg) translateY(var(--spread-end));
            }
        }
        @keyframes spread-4 {
            0% {}
            70%{
                opacity: 1;
            }
            100% {
                height: 0;
                opacity: 0;
                transform: rotate(270deg) translateY(var(--spread-end));
            }
        }

        @keyframes shake {
            0% {transform: rotate(-45deg);}
            10% {transform: rotate(-10deg);}
            20% {transform: rotate(-45deg);}
            30% {transform: rotate(-10deg);}
            40% {transform: rotate(-45deg);}
            50% {transform: rotate(-10deg);}
            60% {transform: rotate(-45deg);}
            70% {transform: rotate(-10deg);}
            80% {transform: rotate(-45deg);}
            90% {transform: rotate(-10deg);}
            100% {transform: rotate(-45deg);}
        }
        
        @keyframes grow {
            from {
                transform: scaleY(0);
            }
            to {
                transform: scaleY(1);
            }
        }
    `;

    return (
        <div css={style}>
            <div className='wrapper'>
                <div className='seed'>
                    <div className='line'></div>    
                </div>
                <div className='effect'>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className='effect clone'>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className='sprout'>
                    <div className='body'></div>
                    <div className='leaf left'>
                        <div className='line'></div>    
                    </div>
                    <div className='leaf right'>
                        <div className='line'></div>    
                    </div>
                </div>
            </div>
        </div>

        /* 전체 화면 모달용 */
        // <>
        //     {ReactDOM.createPortal(
        //         <div css={style}>
        //             <div className='wrapper'>
        //                 <div className='seed'></div>
        //                 <div className='effect'>
        //                     <div/>
        //                     <div/>
        //                     <div/>
        //                     <div/>
        //                 </div>
        //                 <div className='effect clone'>
        //                     <div/>
        //                     <div/>
        //                     <div/>
        //                     <div/>
        //                 </div>
        //                 <div className='sprout'>
        //                     <div className='body'></div>
        //                     <div className='leaf left'></div>
        //                     <div className='leaf right'></div>
        //                 </div>
        //             </div>
        //         </div>,
        //         document.querySelector('#modal-root')!
        //     )}
        // </>
    );
}

export default LoadingIcon;