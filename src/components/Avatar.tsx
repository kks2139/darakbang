import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import CSS from 'csstype';

interface Props {
    imgUrl: string
    style?: CSS.Properties
}

function Avatar({imgUrl, style}: Props){
    return (
        <div css={divStyle} style={style}>
            <img src={imgUrl} alt=''></img>
        </div>
    );
}

const divStyle = css`
    border-radius: 50%;
    background-color: var(--color-light-gray);
    border: 1px solid var(--color-gray);
    width: 80px;
    height: 80px;

    img {
        object-fit: cover;
    }
`;

export default Avatar;