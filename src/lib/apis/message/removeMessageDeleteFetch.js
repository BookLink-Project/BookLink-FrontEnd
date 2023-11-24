import { axiosJsonInstance } from '../common';

/**
 * 쪽지 삭제
 * 파라미터
 * - message_id(Long) (query)
 */
export const startMessagePostFetch = (messageId) =>
  axiosJsonInstance.delete(`/message/${messageId}`);
