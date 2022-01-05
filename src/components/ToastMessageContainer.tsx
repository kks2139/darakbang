import React from "react";
import {ToastMessage} from './index';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux-modules/index';
import {toggleToastMessage} from '../redux-modules/app';

interface Props {
}

function ToastMessageContainer({}: Props){
    const dispatch = useDispatch();
    const {toastMessage} = useSelector((state: RootState)=> state.app);

    const resetToastMessage = ()=>{
        dispatch(toggleToastMessage({
            text: '',
            show: false
        }));
    }

    return <ToastMessage text={toastMessage.text} resetToastMessage={resetToastMessage}/>
}

export default ToastMessageContainer;