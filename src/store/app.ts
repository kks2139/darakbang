import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ConfirmMessageInfo, Notification, ToastMessage, Popup} from '../util/interfaces';

type stateType = {
    backgroundColor: string
    confirmMessageInfo: ConfirmMessageInfo
    showNotificationList: boolean
    notifications: Notification[]
    toastMessage: ToastMessage
    popupInfo: Popup
}

const initialState: stateType = {
    backgroundColor: '',
    confirmMessageInfo: {
        show: false
    },
    showNotificationList: false,
    notifications: [
        {
            id: 1,
            title: '다락방 활동 후기를 남겨보세요!',
            content: '상세 내용입니다.',
            checked: false,
            isSecret: false,
            receivedDate: '20211119131030',
            category: '다락방 > 사이클링',
            place: '강남' 
        },
        {
            id: 2,
            title: '시크릿 편지가 도착했습니다.',
            content: '상세 내용입니다.',
            checked: false,
            isSecret: true,
            receivedDate: '20211119131030',
        },
        {
            id: 3,
            title: '다락방 활동 예정일!',
            content: '상세 내용입니다.',
            checked: true,
            isSecret: false,
            receivedDate: '20211119131030',
            category: '다락방 > 사이클링',
            place: '강남' 
        }
    ],
    toastMessage: {
        text: '',
        show: false
    },
    popupInfo: {
        show: false
    }
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setBackgroundColor: (state, action: PayloadAction<string>)=>{
            state.backgroundColor = action.payload
        },
        toggleConfirmMessage: (state, action: PayloadAction<ConfirmMessageInfo>)=>{
            if(action.payload.show === undefined) action.payload.show = true;
            state.confirmMessageInfo = action.payload
        },
        toggleNotification: (state, action: PayloadAction<boolean>)=>{
            state.showNotificationList = action.payload
        },
        setNotifications: (state, action: PayloadAction<Notification[]>)=>{
            state.notifications = action.payload
        },
        toggleToastMessage: (state, action: PayloadAction<ToastMessage>)=>{
            state.toastMessage = action.payload
        },
        togglePopup: (state, action: PayloadAction<Popup>)=>{
            const children = action.payload.show ? action.payload.children : undefined;
            state.popupInfo.show = action.payload.show;
            state.popupInfo.children = children;
        },
    }
});

export const appActions = appSlice.actions
export default appSlice.reducer;