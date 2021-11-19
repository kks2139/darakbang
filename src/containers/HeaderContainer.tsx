import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import Header from "../components/common/Header";
import {RootState} from '../redux-modules/index';
import {toggleNotification} from '../redux-modules/app';

function HeaderContainer(){
    const dispatch = useDispatch();
    const {showNotificationList} = useSelector((state: RootState)=> state.app);

    const onClickNoti = ()=>{
        dispatch(toggleNotification(!showNotificationList))
    }

    return (
        <Header onClickNoti={onClickNoti}/>
    );
}

export default HeaderContainer;