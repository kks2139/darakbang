import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { footerHeight } from '../util/style';

const Footer = () => {
    return (
        <footer css={styles}>
            <div className="footer">
                <div className="footer__logo">
                    다락방
                </div>
                <div className="footer__info">
                    <div className="footer__info__term">
                        <div className="gray-16">이용 약관</div>
                        <div className="gray-16">개인정보 처리방침</div>
                    </div>
                    <div className="gray-16">
                        다락방 | 서울특별시 강남구 신사동 1234 | 전화번호 : 010-5060-8349 | uyu6610@gmail.com
                    </div>
                </div>
                <div className="footer__nav">
                    <ul>
                        <li className="gray-16">문의하기</li>
                        <li className="gray-16">공지사항</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const styles = css`
    width: 100%;
    height: ${footerHeight}px;
    
    background-color: #FFF;
    border-top: 1px solid var(--color-dim-gray);

    .footer {
        max-width: 1285px;
        width: 90%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;

        &__logo {
            font-size: 56px;
            font-weight: bold;
            color: #9D9D9D;
        }

        &__info {
            &__term {
                display: flex;

               >  div + div {
                    margin-left: 24px;
               }
            }

            > div + div {
                margin-top: 12px;
            }
        }

        &__nav {
            > ul {
                list-style: none;

                li + li {
                    margin-top: 12px;
                }
            }
        }
    }

    .gray-16 {
        font-size: 16px;
        color: #B4B4B4;
    }
`;

export default Footer;