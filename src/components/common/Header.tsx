import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Header = () => {
    return (
        <header css={styles}>
            <div className="header">
                <div className="header__logo">
                    <div className="header__logo__logo">다락방</div>
                    <div className="header__logo__about gray-16">About</div>
                </div>
                <div className="header__gethering">
                    <div className="header__gethering__button">게더링</div>
                </div>
                <div className="header__nav">
                    <ul>
                        <li className="gray-16">알림</li>
                        <li className="gray-16">로그인</li>
                        <li className="gray-16">프로필</li>
                        <li className="gray-16">Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

const styles = css`
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
            padding: 8px 10px;
            background-color: #000;
            color: #FFF;
            font-size: 16px;
            font-weight: bold;
        }
    }

    .header__nav {
        > ul {
            display: flex;
            list-style: none;

            li {
                margin-right: 16px;
            }
            li:first-child {
                margin-right: 40px;
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
`;

export default Header;