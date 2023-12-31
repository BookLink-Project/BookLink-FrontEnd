import { useState, useEffect } from 'react';

import { bookReportsDetail } from '../../../../lib/apis/communities/detail/communitiesDetailService';

import { useParams } from 'react-router-dom';

import {
  MainContainerDiv,
  CommunitiesDetailContentsDiv,
} from '../../../../styles/globalStyled';
import LikeShareForm from '../../../Common/LikeShare/LikeShareForm';

import CommunitiesDetailForm from '../../../Common/CommunitiesDetail/CommunitiesDetailForm';
import CommunitiesCommentForm from '../../../Common/CommunitiesComment/CommunitiesCommentForm';

import { CommunitiesDetailContext } from '../../../../context/communitiesDetailContext';

import { useQuery } from '@tanstack/react-query';

const BookReportDetailForm = () => {
  const { id } = useParams();
  const { data } = useQuery(['books', id], () => bookReportsDetail(Number(id)));

  const [info, setInfo] = useState(data);
  useEffect(() => {
    setInfo(data);
  }, [data]);

  return (
    <MainContainerDiv>
      <CommunitiesDetailContext.Provider value={{ info, setInfo }}>
        <LikeShareForm />
        <CommunitiesDetailContentsDiv>
          <CommunitiesDetailForm />
          <CommunitiesCommentForm />
        </CommunitiesDetailContentsDiv>
      </CommunitiesDetailContext.Provider>
    </MainContainerDiv>
  );
};

export default BookReportDetailForm;
