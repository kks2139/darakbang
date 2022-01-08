import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useHistory } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {appActions} from '../store/app';
import { RootState } from '../store/index';

const Header = () => {
    const {showNotificationList} = useSelector((state: RootState)=> state.app);
    const dispatch = useDispatch();
    const history = useHistory();

    const toGathering = () => {
        history.push('/');
    }

    const onClickMenu = (e: React.MouseEvent<HTMLUListElement>)=>{
        if(e.target instanceof HTMLElement){
            const link = e.target.dataset.link;
            if(link){
                history.push(link);
            }
        }
    }

    const onClickNoti = ()=>{
        dispatch(appActions.toggleNotification(!showNotificationList));
    }

    return (
        <header css={styles}>
            <div className="header">
                <div className="header__logo">
                    <div className="header__logo__logo" onClick={toGathering}>다락방</div>
                    <div className="header__logo__about gray-16">About</div>
                </div>
                <div className="header__gethering">
                    <div className="header__gethering__button">게더링</div>
                </div>
                <div className="header__nav">
                    <ul onClick={onClickMenu}>
                        <li className="gray-16" onClick={onClickNoti}>
                            알림
                            <img src='/mail-2.png'></img>
                            <div className='mail-cnt'>{2}</div>
                        </li>
                        <li className="gray-16" data-link='/myteam'>내 팀</li>
                        <li className="gray-16">Contact</li>
                        <li className="gray-16 btn-type-1" data-link='/login'>로그인</li>
                        <li className="gray-16 btn-type-2">회원가입</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

const styles = css`
    position: relative;
    width: 100%;
    height: 128px;
    background-color: #FFF;
    border-bottom: 1px solid #C4C4C4;

    .header {
        max-width: 1285px;
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }

    .header__logo {
        display: flex;
        align-items: center;

        &__logo {
            font-size: 24px;
            font-weight: bold;
            color: #000;
        }

        > div + div {
            margin-left: 40px;
        }
    }

    .header__gethering {
        &__button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 8px 10px;
            background-color: white;
            color: var(--color-main-text);
            border: 1px solid var(--color-main-text);
            font-size: 32px;
            font-weight: bold;
        }
    }

    .header__nav {
        > ul {
            display: flex;
            align-items: center;
            list-style: none;

            li {
                margin-right: 16px;
                cursor: pointer;
            }
            li:first-child {
                margin-right: 40px;
                position: relative;
                > * {
                    position: absolute;
                }
                img {
                    transform: translate(-10px, -20px);
                }
                .mail-cnt {
                    z-index: 1;
                    top: 0;
                    transform: translateX(37px) rotate(15deg);
                    text-align: center;
                    line-height: 20px;
                    font-size: 16px;
                    font-weight: bold;
                    color: white;
                    background-color: var(--color-peach);
                    width: 24px;
                    height: 24px;
                    border: 1px solid black;
                    border-radius: 50%;
                }
            }
            li:last-child {
                margin-right: 0;
            }
        }
    }

    .gray-16 {
        font-size: 16px;
        color: #B4B4B4;
    }

    [class*=btn-type] {
        padding: 13px 14px;
        margin: 0 10px;
    }
    .btn-type-1 {
        color: black;
        background-color: var(--color-main-text);
    }
    .btn-type-2 {
        border: 1px solid var(--color-main-text);
    }
`;

export default Header;