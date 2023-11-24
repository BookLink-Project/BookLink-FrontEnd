import { axiosJsonInstance } from '../common';

/**
 * 해당 쪽지방 입장(쪽지 내용들 뿌려주기)
 * @params
 * - 파라미터
 * - room_id (query)
 */
export const entranceMessageGetFetch = (roomId) =>
  axiosJsonInstance.get(`/message/entrance/${roomId}`);
