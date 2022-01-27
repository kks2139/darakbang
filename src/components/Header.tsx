import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useDispatch, useSelector} from 'react-redux';
import {appActions} from '../store/app';
import { RootState } from '../store/index';
import {NavLink} from 'react-router-dom';
import { headerHeight } from '../util/style';
import {NotificationList} from './index';
import {CSSTransition} from 'react-transition-group';

const Header = () => {
    const {showNotificationList} = useSelector((state: RootState)=> state.app);
    const dispatch = useDispatch();

    const onClickNoti = ()=>{
        dispatch(appActions.toggleNotification(!showNotificationList));
    }

    return (
        <header css={styles}>
            <div className="header">
                <div className="header__logo">
                    <NavLink to='/' className='header__logo__logo'>
                        다락방
                    </NavLink>
                    <NavLink to='' className='header__logo__about gray-16'>
                        About
                    </NavLink>
                </div>
                <div className="header__gethering">
                    <div className="header__gethering__button">게더링</div>
                </div>
                <div className="header__nav">
                    <ul>
                        <li className="noti-box gray-16" onClick={onClickNoti}>
                            알림
                            <img src='/mail-2.png'></img>
                            <div className='mail-cnt'>{2}</div>
                        </li>
                        <li className="gray-16">
                            <NavLink to='/my-team'>내 팀</NavLink>
                        </li>
                        <li className="gray-16">
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login' className='btn-type-1'>로그인</NavLink>
                        </li>
                        <li>
                            <NavLink to='/sign-up' className='btn-type-2'>회원가입</NavLink>
                        </li>
                    </ul>
                    <CSSTransition
                        in={showNotificationList}
                        unmountOnExit
                        timeout={600}
                        classNames={{
                            enterActive: 'fade-in',
                            exitActive: 'fade-out'
                        }}>
                        <NotificationList/>
                    </CSSTransition>
                </div>
            </div>
        </header>
    );
};

const styles = css`
    position: relative;
    width: 100%;
    height: ${headerHeight}px;
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

        > a + a {
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

            .noti-box {
                position: relative;
            }

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
                > img {
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
        margin-left: 10px;
    }
    .btn-type-1 {
        background-color: var(--color-main-text);
        a {
            color: white;
            font-weight: bold;
        }
    }
    .btn-type-2 {
        border: 1px solid var(--color-main-text);
        a {
            color: var(--color-gray);
            font-weight: bold;
        }
    }
`;

export default Header;