import { useState, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useUserStore } from '../../../store/useUserStore';

import * as Styled from './Styled';
import {
  bookClubsCommentRegister,
  bookReportCommentRegister,
  freeReportCommentRegister,
} from '../../../lib/apis/communities/comment/communitiesCommentService';
import CommunitiesCommentCardForm from './CommuntiesCommentCard/CommunitiesCommentCardForm';
import { CommunitiesDetailContext } from '../../../context/communitiesDetailContext';
const CommunitiesCommentForm = () => {
  const { id } = useParams();
  const commentRef = useRef(null);

  const { info, setInfo } = useContext(CommunitiesDetailContext);
  const { category, replies, reply_cnt } = info;
  const [sortStatus, setSortStatus] = useState(0); //[기본은 공감순, 0일씨 공감순, 1일씨 최신순]
  const isLogin = useUserStore((state) => state.isLogin);
  console.log(isLogin);
  console.log(info);

  const onSortHandler = (e) => {
    if (e.target.value === 0) {
      setSortStatus(0);
    } else {
      setSortStatus(1);
    }
  };

  const onCommentPost = async (e) => {
    let data1;
    console.log(commentRef.current.value);
    console.log(e.type);
    if (e.key === 'Enter' || e.type === 'click') {
      if (isLogin) {
        const Content = commentRef.current.value;
        if (category === '독서 모임') {
          const { data } = await bookClubsCommentRegister(Content, id, 0);
          data1 = data;
        } else if (category === '독후감') {
          const { data } = await bookReportCommentRegister(Content, id, 0);
          data1 = data;
        } else {
          const { data } = await freeReportCommentRegister(Content, id, 0);
          data1 = data;
        }
        console.log(data1);
        const { replyId, date, content, writer, image } = data1;
        const replies = [
          {
            id: replyId,
            parent_id: replyId,
            writer,
            content,
            date,
            image,
            like_cnt: 0,
            sub_reply_cnt: 0,
            isLiked: false,
            isUpdated: false,
          },
          ...info.replies,
        ];
        setInfo({ ...info, reply_cnt: reply_cnt + 1, replies });
        commentRef.current.value = '';
      }
    }
  };
  console.log(replies);
  return (
    <>
      <Styled.CommentTag>
        댓글 <span>{reply_cnt}</span>
      </Styled.CommentTag>
      <Styled.CommentPostForm>
        <Styled.WriterImg>
          <img src="https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png" />
        </Styled.WriterImg>
        <Styled.Comment>
          <Styled.CommentInputForm
            placeholder="댓글 작성하기"
            ref={commentRef}
            onKeyDown={onCommentPost}
          />
          <Styled.CommentButtonForm>
            <Styled.CommentButtons>
              <span>취소</span>
              <button onClick={onCommentPost}>작성하기</button>
            </Styled.CommentButtons>
          </Styled.CommentButtonForm>
        </Styled.Comment>
      </Styled.CommentPostForm>
      <Styled.CommentSortForm onClick={onSortHandler}>
        <Styled.Sort isClicked={sortStatus === 0} value="0">
          공감순
        </Styled.Sort>
        <Styled.Sort isClicked={sortStatus === 1} value="1">
          최신순
        </Styled.Sort>
      </Styled.CommentSortForm>
      <Styled.CommentListForm>
        {replies &&
          (sortStatus === 0
            ? replies.sort((a, b) => b.like_cnt - a.like_cnt)
            : replies.sort((a, b) => b.id - a.id)
          )
            .filter(({ id, parent_id }) => id === parent_id)
            .map(
              ({
                id,
                image,
                writer,
                date,
                isLiked,
                isUpdated,
                content,
                like_cnt,
                sub_reply_cnt,
              }) => (
                <CommunitiesCommentCardForm
                  key={id}
                  replyId={id}
                  image={image}
                  writer={writer}
                  date={date}
                  isLiked={isLiked}
                  isUpdated={isUpdated}
                  content={content}
                  like_cnt={like_cnt}
                  sub_reply_cnt={sub_reply_cnt}
                />
              )
            )}
      </Styled.CommentListForm>
    </>
  );
};

export default CommunitiesCommentForm;
