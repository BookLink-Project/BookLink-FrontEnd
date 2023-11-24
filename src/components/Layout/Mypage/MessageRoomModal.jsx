import { useRef } from 'react';
import styled from 'styled-components';
import { sendMessagePostFetch } from '../../../lib/apis/message/sendMessagePostFetch';
import { useUserStore } from '../../../store/useUserStore';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 80vh;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;

    & .item {
      padding: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid #dbdbdb;

      & .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
      }

      & .message-contents {
        font-size: 12px;
      }
    }
  }
  & form {
    display: flex;
    justify-content: center;
    align-items: center;

    & input {
      width: 80%;
      border-radius: 4px;

      &:focus {
        outline: 1.5px solid #3bff3b;
      }
    }
    & button {
      margin-left: 12px;
      background-color: #3bff3b;
      color: #fff;
      border-radius: 4px;
      padding: 4px 8px;
      font-size: 10px;
      font-weight: 400;
    }
  }

  & .closeBtn {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 40px;

    & button {
      width: 100%;
      background-color: #3bff3b;
      color: #fff;
      border-radius: 4px;
      padding: 8px 0;
    }
  }
`;

const MessageRoomModal = ({
  roomId,
  messageList,
  setMessageList,
  applyInfo,
  onClose,
}) => {
  console.log(messageList);

  const { userInfo } = useUserStore.getState();
  const { nickname } = userInfo;

  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (messageRef.current.value === '')
        return alert('메시지를 입력해주세요');
      else {
        console.log(applyInfo);
        const messageParams = {
          content: messageRef.current.value,
          receiver:
            messageList[0].receiver !== nickname
              ? messageList[0].receiver
              : messageList[0].sender,
          room_id: roomId,
        };

        const sendRes = await sendMessagePostFetch(messageParams);

        console.log(sendRes);
        setMessageList([...messageList, sendRes.data.data]);
        messageRef.current.value = '';
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(messageList);
  console.log(messageList[0].sender === nickname);
  console.log(nickname);
  return (
    <ModalContainer>
      <Wrapper>
        <ul>
          {messageList?.map((list) => {
            return (
              <li className="item" key={list.message_id}>
                <div className="title">
                  <div>
                    {list.content === ''
                      ? '전달 사항'
                      : nickname === list.sender
                      ? list.sender
                      : list.sender}
                  </div>
                  <div>{list.created_time.split('T')[0]}</div>
                </div>
                <div className="message-contents">
                  {list.content !== ''
                    ? list.content
                    : applyInfo
                    ? `${list.receiver}님에게 대여 신청을 한 상태에요. 답장이 왔다면 밑에 표시됩니다.`
                    : `${list.sender}님에게 대여 신청을 받았어요. 쪽지를 주고 받을 수 있습니다.`}
                </div>
              </li>
            );
          })}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={messageRef} />
          <button type="submit"> 전송 </button>
        </form>
        <div className="closeBtn">
          <button onClick={onClose}>닫기</button>
        </div>
      </Wrapper>
    </ModalContainer>
  );
};

export default MessageRoomModal;
