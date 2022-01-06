import React from "react";
import {ToastMessage} from './index';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/index';
import {appActions} from '../store/app';

interface Props {
}

function ToastMessageContainer({}: Props){
    const dispatch = useDispatch();
    const {toastMessage} = useSelector((state: RootState)=> state.app);

    const resetToastMessage = ()=>{
        dispatch(appActions.toggleToastMessage({
            text: '',
            show: false
        }));
    }

    return <ToastMessage text={toastMessage.text} resetToastMessage={resetToastMessage}/>
}

export default ToastMessageContainer;