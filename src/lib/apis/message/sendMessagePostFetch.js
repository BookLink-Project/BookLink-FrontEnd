import { axiosJsonInstance } from '../common';

/**
 * 쪽지 보내기 ( 방 개설된 상태 ) 
 * @params 
 {
     "content": "혹시 에누리 가능할까요?",
     "receiver": "캐치카페",
     "room_id": 7
 }
 */
export const sendMessagePostFetch = (params) =>
  axiosJsonInstance.post('/message/send', params);
