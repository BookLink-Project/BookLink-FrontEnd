import { axiosJsonInstance } from '../common';

/**
 * 마이페이지 쪽지함 리스트
 */
export const messageListGetFetch = () => axiosJsonInstance.get('/message/list');
