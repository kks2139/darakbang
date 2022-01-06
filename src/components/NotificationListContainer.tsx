import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/index';
import {appActions} from '../store/app';
import {NotificationList} from '../components/index';
import {request} from '../util/util';
import {Notification} from '../util/interfaces';

function NotificationListContainer(){
    const dispatch = useDispatch();
    const {showNotificationList, notifications} = useSelector((state: RootState)=> state.app);

    const onClickClose = ()=>{
        dispatch(appActions.toggleNotification(!showNotificationList))
    }

    const getList = async ()=>{
        const list = await request('getNotifications');
        if(list.length > 0){
            dispatch(appActions.setNotifications(list));
        }
    }

    useEffect(()=>{
        //getList();
    }, []);

    return (
        <NotificationList list={notifications} onClickClose={onClickClose}/>
    );
}

export default NotificationListContainer;