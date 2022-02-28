import React, { useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useRequest from '../hooks/useRequest';


function RankList(){
    const {isLoading, error, sendRequest} = useRequest();

    useEffect(()=>{
        // 랭킹 1,2,3 팀 조회
        sendRequest({
            api: 'api',
        }, ()=>{
            
        });


    }, []);

    const style = css`
        display: flex;
        align-items: center;
    `;

    return (
        <div css={style}>

        </div>
    );
}


export default RankList;