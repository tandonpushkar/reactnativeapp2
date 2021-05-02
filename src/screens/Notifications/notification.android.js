import PushNotification from "react-native-push-notification";

const showNotification = (title, message) => {
    PushNotification.localNotification({
        title: title,
        message: message,
        channelId: 'mychannel21'
    })
}


const handleScheduledNotification = (title, message) => {
    PushNotification.localNotificationSchedule({
        title: title,
        message: message,
        date: new Date(Date.now() + 5 * 1000),
        channelId: 'mychannel21'
    })
}


const handleCancel = () => {
    PushNotification.cancelAllLocalNotifications()
}

export { showNotification, handleScheduledNotification, handleCancel };