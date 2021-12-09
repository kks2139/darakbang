import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {Member} from '../util/interfaces';
import {Avatar, Grid, GridColumn} from './index';

interface Props {
    memberList: Member[]
}

function MemberInfo({memberList}: Props){
    const leader = memberList.filter(member => member.isLeader);

    const modifyList = ()=> {
        return memberList.map(member => {
            member.el = <Avatar imgUrl={member.avatar} style={{width: '42px', height: '42px'}}/>
            return member;
        });
    } 

    const addText = (value: string | number)=>{
        return value + '년 차';
    }

    return (
        <div className=''>
            {leader.length > 0 ? 
                <Avatar imgUrl={leader[0].avatar}/>
            : null}
            <Grid<Member> dataList={modifyList()} hideHeader={true} border={true}>
                <GridColumn width='' field='el'/>
                <GridColumn width='80px' field='nickname' cellStyle={{fontSize: '16px', fontWeight: 'bold', paddingLeft: '7px'}}/>
                <GridColumn width='70px' field='activePeriod' cellStyle={{fontSize: '16px'}} valueFormatFunction={addText}/>
                <GridColumn width='' field='joinCount' cellStyle={{fontSize: '16px'}}/>
            </Grid>
        </div>
    );
}

const style = css`

`;

export default MemberInfo;