import React from "react";
import {ConfirmMessage} from './index';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/index';
import {appActions} from '../store/app';

interface Props {
}

function ConfirmMessageContainer({}: Props){
    const dispatch = useDispatch();
    const {title, subTitle, msg, confirmText, confirmCallback} = useSelector((state: RootState)=> state.app.confirmMessageInfo);

    const onClickButton = (e: React.MouseEvent<HTMLDivElement>)=>{
        const {type} = e.currentTarget.dataset;
        if(type === 'confirm'){
            if(confirmCallback){
                confirmCallback();                    
            }
        }
        dispatch(appActions.toggleConfirmMessage({
            show: false
        }));
    }

    return (
        <ConfirmMessage 
            title={title}
            subTitle={subTitle}
            msg={msg}
            confirmText={confirmText}
            onClickButton={onClickButton}/>
    );
}

export default ConfirmMessageContainer;