import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Header} from "./index";
import {RootState} from '../redux-modules/index';
import {appActions} from '../redux-modules/app';

function HeaderContainer(){
    const dispatch = useDispatch();
    const {showNotificationList} = useSelector((state: RootState)=> state.app);

    const onClickNoti = ()=>{
        dispatch(appActions.toggleNotification(!showNotificationList))
    }

    return (
        <Header onClickNoti={onClickNoti}/>
    );
}

export default HeaderContainer;