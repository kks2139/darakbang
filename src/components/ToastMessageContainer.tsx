import React from "react";
import {ToastMessage} from './index';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux-modules/index';
import {appActions} from '../redux-modules/app';

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