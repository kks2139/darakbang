import React from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {GatheringInfo} from '../util/interfaces';

interface Props {
    info: GatheringInfo | null
}

function GatheringDetail({info}: Props){
    return (
        !info ? null :
        <div css={style}>
            {info.name}
        </div>
    );
}

const style = css`
    
`;

export default GatheringDetail;