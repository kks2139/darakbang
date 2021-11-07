import React from "react";
import {ConfirmMessage} from '../components/index';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux-modules/index';
import {toggleConfirmMessage} from '../redux-modules/app';

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
        dispatch(toggleConfirmMessage({
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