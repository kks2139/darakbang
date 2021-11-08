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
                        <>
                            <div className="large-category">
                                { large.largeCategory }
                            </div>
                            {
                                    large.items.map((medium, i) => {
                                        return (
                                            <>
                                                <div className="medium-category">
                                                    { medium.mediumCategory }
                                                </div>
                                            </>
                                        )
                                    })
                                }
                        </>
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
    div {
        padding: 8px 0;
        font-size: 16px;
    }
    
    .large-category {
        padding: 16px 0;
        font-weight: 600;

        :not(:first-of-type) {
            border-top: 1px solid #E5E5E5
        }
    }

    .make-team {
        width: 100px;
        height: 100px;
        margin-top: 64px;
        background-color: #FFF;
        border-radius: 50%;
        border: 2px solid #02BCD6;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;

        > span {
            padding-bottm: 8px;
            font-size: 24px;
            font-weight: 600;
            color: #02BCD6;
        }
    }
`;

export default SideMenu;