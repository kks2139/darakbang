import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {Route, Link, useRouteMatch} from 'react-router-dom';
import { Chatting, MyTeamList, TeamRoom } from '../index';

function MyTeamPage(){
    const divRef = useRef<HTMLDivElement>(null);
    const match = useRouteMatch();
    
    const onClickMenu = (e: React.MouseEvent<HTMLElement>)=> {
        const root = divRef.current!;
        if(e.target instanceof HTMLElement){
            const targ = e.target.closest('a.link');
            if(targ && root.contains(e.target)){
                const links = root.querySelectorAll('a.link')!;
                if(links?.length > 0){
                    links.forEach(link => link.classList.remove('sel'));
                }
                targ.classList.add('sel');
            }
        }
    }

    return (
        <div css={style} ref={divRef}>
            <div className='side-menu' onClick={onClickMenu}>
                <div className='tit'>내 팀</div>
                <Link to={`${match.path}`} className='link'>팀 룸</Link>
                <Link to={`${match.path}/history`} className='link'>팀 기록</Link>
            </div>
            <div className='content'>
                <Route path={`${match.path}`} exact>
                    <MyTeamList/>
                </Route>
                <Route path={`${match.path}/history`} exact>
                    <MyTeamList/>
                </Route>
                <Route path={`${match.path}/room:teamId`} exact>
                    <TeamRoom/>
                </Route>
                <Route path={`${match.path}/chatting`} exact>
                    <Chatting/>
                </Route>
            </div>
        </div>
    );
}

const style = css`
    display: flex;
    justify-content: center;
    padding: 20px 0 0 0;
    
    > .side-menu {
        display: flex;
        flex-direction: column;
        width: 220px;
        padding: 20px;
        .tit {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .link {
            cursor: pointer;
            font-size: 17px;
            transition: .2s;
            margin-bottom: 18px;
            &:hover {
                font-weight: bold;
            }
            &.sel {
                font-weight: bold;
            }
        }
    }
    > .content {
        width: 1000px;
        min-height: 500px;
        display: flex;
        justify-content: flex-start;
    }
`;

export default MyTeamPage;