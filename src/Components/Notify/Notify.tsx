import { Bounce, toast, ToastOptions, ToastPosition } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const notificationOptions: ToastOptions = {
    position: "top-right" as ToastPosition,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
};

export const infoNoti = (content: string) => {
    toast.info(content, notificationOptions);
}

export const successNoti = (content: string) => {
    toast.success(content, notificationOptions);
}

export const warnNoti = (content: string) => {
    toast.warn(content, notificationOptions);
}

export const errorNoti = (content: string) => {
    toast.error(content, notificationOptions);
}
