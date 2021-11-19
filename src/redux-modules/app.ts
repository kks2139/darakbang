import {ConfirmMessageInfo, Notification} from '../util/interfaces';

const SET_BAKCGROUND_COLOR = 'app/SET_BAKCGROUND_COLOR' as const;
const TOGGLE_CONFIRM_MESSAGE = 'app/TOGGLE_CONFIRM_MESSAGE' as const;
const TOGGLE_NOTIFICATION = 'app/TOGGLE_NOTIFICATION' as const;
const SET_NOTIFICATIONS = 'app/SET_NOTIFICATIONS' as const;

export const setBackgroundColor = (arg: string)=> ({ 
    type : SET_BAKCGROUND_COLOR,
    payload : arg
});
export const toggleConfirmMessage = (arg: ConfirmMessageInfo)=> ({ 
    type : TOGGLE_CONFIRM_MESSAGE,
    payload : arg
});
export const toggleNotification = (arg: boolean)=> ({ 
    type : TOGGLE_NOTIFICATION,
    payload : arg
});
export const setNotifications = (arg: Notification[])=> ({ 
    type : SET_NOTIFICATIONS,
    payload : arg
});

type actionType = 
    | ReturnType<typeof setBackgroundColor>
    | ReturnType<typeof toggleConfirmMessage>
    | ReturnType<typeof toggleNotification>
    | ReturnType<typeof setNotifications>

type stateType = {
    backgroundColor: string
    confirmMessageInfo: ConfirmMessageInfo
    showNotificationList: boolean
    notifications: Notification[]
}

const initState: stateType = {
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
    ]
};

function app(state: stateType = initState, action: actionType) {
    switch (action.type) {
        case SET_BAKCGROUND_COLOR:
            return {
                ...state,
                backgroundColor: action.payload
            };
        case TOGGLE_CONFIRM_MESSAGE:
            if(action.payload.show === undefined){
                action.payload.show = true;
            }
            return {
                ...state,
                confirmMessageInfo: {
                    ...action.payload
                }
            };
        case TOGGLE_NOTIFICATION:
            return {
                ...state,
                showNotificationList: action.payload
            };
        case SET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload.slice().map(noti => noti)
            };
        default:
            return state;
  }
}

export default app;