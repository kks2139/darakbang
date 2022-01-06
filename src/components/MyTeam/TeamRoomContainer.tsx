import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/index';
import {TeamRoom} from '../../components/index';
import {useLocation} from 'react-router-dom';
import {TeamDetail} from '../../util/interfaces';

interface Params {
    team: TeamDetail
}

function TeamRoomContainer(){
    const dispatch = useDispatch();
    const {selectedTeamRoom} = useSelector((state: RootState)=> state.myTeam);
    const location = useLocation<Params>();
    const {team} = location.state;

    useEffect(()=>{
        // 나중엔 넘겨받은 team.id 로 상세 정보 api 요청, 지금은 테스트용 데이터 사용
    }, [team]);

    return (
        <TeamRoom teamInfo={selectedTeamRoom}/>
    );
}

export default TeamRoomContainer;