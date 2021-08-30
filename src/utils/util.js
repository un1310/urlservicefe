import { notification } from 'antd';
export const notify = ({ message, type = 'success', title = 'Update Successful' }) => {
  notification[type]({
    message: title,
    description: message,
  });
};