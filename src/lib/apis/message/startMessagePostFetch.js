import { axiosJsonInstance } from '../common';

/**
 * 첫 대여 요청 쪽지
 * @params 
 * {
    "content":"안녕하세요",
    "receiver":"신입개발자",
    "rent_date": 14,
    "rent_id": 2
    }
 */
export const startMessagePostFetch = (params) =>
  axiosJsonInstance.post('/message/start', params);
