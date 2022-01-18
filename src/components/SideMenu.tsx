import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useHistory} from 'react-router-dom';

const sideMenuMock = [
    {
        largeCategory: '취미',
        items: [
            {
                mediumCategory: '스포츠'
            },
            {
                mediumCategory: '공예'
            },
            {
                mediumCategory: '독서'
            },
            {
                mediumCategory: '요리'
            },
            {
                mediumCategory: '여행'
            },
            {
                mediumCategory: '예술'
            },
        ]
    },
    {
        largeCategory: '커리어',
        items: [
            {
                mediumCategory: '직무',
                items: [
                    {
                        smallCategory: '디자이너'
                    },
                    {
                        smallCategory: '개발자'
                    }
                ]
            },
            {
                mediumCategory: '공모전'
            },
            {
                mediumCategory: '대외활동'
            },
            {
                mediumCategory: '면접'
            },
            {
                mediumCategory: '자소서'
            },
            {
                mediumCategory: '사이드프로젝트'
            },
            {
                mediumCategory: '스터디'
            },
        ]
    },
    {
        largeCategory: '라이프',
        items: [
            {
                mediumCategory: '버킷리스트'
            },
            {
                mediumCategory: '반려'
            },
            {
                mediumCategory: '자녀'
            },
            {
                mediumCategory: '심리'
            },
            {
                mediumCategory: '도전'
            },
            {
                mediumCategory: '뷰티'
            }
        ]
    }
]

const SideMenu = () => {
    const history = useHistory();

    const onClickMakeTeam = ()=>{
        history.push('/make-team');
    }

    return (
        <div css={styles}>
            {
                sideMenuMock.map((large, i) => {
                    return (
                        <ul key={i}>
                            <li className="large-category">
                                { large.largeCategory }
                            </li>
                            {
                                large.items.map((medium, i) => {
                                    return (
                                        <li key={i} className="medium-category">
                                            { medium.mediumCategory }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                })
            }

            <div className="make-team" onClick={onClickMakeTeam}>
                <span>
                    팀<br />
                    만들기
                </span>
            </div>
        </div>
    );
};

const styles = css`
    width: 125px;
    margin-right: 100px;

    div {
        padding: 8px 0;
        font-size: 16px;
    }

    ul {
        &:not(:last-of-type){
            padding-bottom: 20px;
            border-bottom: 1px solid #E5E5E5;
        }
    }
    
    .large-category {
        padding: 16px 0 16px 5px;
        font-weight: 600;
    }

    .medium-category {
        display: flex;
        align-items: center;
        height: 35px;
        padding-left: 5px;
        cursor: pointer;
        transition: .2s;
        &:hover {
            background-color: var(--color-bg-gray);
        }
    }

    .make-team {
        width: 100px;
        height: 100px;
        margin: 64px auto;
        background-color: #FFF;
        border-radius: 50%;
        border: 2px solid #02BCD6;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;

        > span {
            padding-bottom: 8px;
            font-size: 24px;
            font-weight: 600;
            color: #02BCD6;
        }
    }
`;

export default SideMenu;