// Centralized Toastify configuration & wrappers
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DEFAULT_OPTS = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export function notifySuccess(message) {
  toast.success(message, DEFAULT_OPTS);
}

export function notifyError(message) {
  toast.error(message, DEFAULT_OPTS);
}

export function notifyInfo(message) {
  toast.info(message, DEFAULT_OPTS);
}

export function notifyWarn(message) {
  toast.warn(message, DEFAULT_OPTS);
}
