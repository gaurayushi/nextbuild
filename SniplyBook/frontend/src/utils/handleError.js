import { notifyError } from './toastify';

export default function handleError(error) {
  const msg =
    error.response?.data?.msg ||
    error.response?.data?.message ||
    error.message ||
    'An unexpected error occurred';

  console.error('[API ERROR]', error);

  notifyError(msg);

  return msg;
}
