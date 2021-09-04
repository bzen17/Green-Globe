import {axiosPrivate} from '../interceptors';
import reactConfig from '../../config/reactConfig';

const baseURl = reactConfig.baseUrl;

export const getUser = userID => {
  const url = `${baseURl}/api/user/${userID}`;
  return axiosPrivate.request({url: url, method: 'GET'});
};

export const getUsers = () => {
  const url = `${baseURl}/api/user`;
  return axiosPrivate.request({url: url, method: 'GET'});
};

export const createUser = data => {
  const url = `${baseURl}/api/user/`;
  return axiosPrivate.request({url: url, data: data, method: 'POST'});
};

export const editUser = data => {
  const url = `${baseURl}/api/user/`;
  return axiosPrivate.request({url: url, data: data, method: 'PUT'});
};

export const deleteUser = userID => {
  const url = `${baseURl}/api/user/${userID}`;
  return axiosPrivate.request({url: url, method: 'DELETE'});
};

