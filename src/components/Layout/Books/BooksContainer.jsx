import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './Styled';
import BookContainer from '../../../containers/BookContainer';
import Rents from '../../Books/Rents';
import CategorySelects from '../../Books/CategorySelects';
import rentButtonLogo from '../../../images/rent_logo.svg';
import bookStoreLogo from '../../../images/bookstore_logo.svg';

const BooksContainer = () => {
  const cards = useSelector((state) => state.BOOK.books);

  //책방, 대여 관련
  const [showBooksComponent, setShowBooksComponent] = useState(true);
  const [showRentsComponent, setShowRentsComponent] = useState(false);

  //sorting 관련
  const [sortCurrent, setSortCurrent] = useState(true);
  const [sortLikes, setSortLikes] = useState(false);
  const [likeSortedBooks, setLikeSortedBooks] = useState([]);
  const [currentSortedBooks, setCurrentSortedBooks] = useState([]);

  //카테고리 피렅링 관련
  const [category, setCategory] = useState('전체');
  const [CID, setCID] = useState(0);

  //검색 관련
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isPressEnter, setIsPressEnter] = useState(false);

  const handleClickBooks = useCallback(() => {
    setShowRentsComponent(false);
    setShowBooksComponent(true);
  }, []);

  const handleClickRents = useCallback(() => {
    setShowBooksComponent(false);
    setShowRentsComponent(true);
  }, []);

  const handleClickSortCurrent = useCallback(() => {
    setSortLikes(false);
    setSortCurrent(true);
  }, []);

  const handleClickSortLikes = useCallback(() => {
    setSortCurrent(false);
    setSortLikes(true);
    const likeSortedBooks = [...cards].sort((a, b) => {
      return b.like_cnt - a.like_cnt;
    });

    setLikeSortedBooks([...likeSortedBooks]);
  }, [cards]);

  const handleSelectCategory = useCallback((category, CID) => {
    setCategory(category);
    setCID(CID);
  }, []);

  const handleKeyDownSearch = useCallback(
    async (keyword, e = { key: 'Not' }) => {
      if (e.key === 'Enter') {
        setSearchKeyword(keyword);
        setIsPressEnter(true);
        return;
      }
      setSearchKeyword(keyword);
      setIsPressEnter(false);
      return;
    },
    []
  );

  return (
    <Styled.BooksContainer>
      <Styled.NavDiv>
        <div>
          <Styled.NavList>
            <Styled.NavLi
              onClick={handleClickBooks}
              active={showBooksComponent.toString()}
            >
              <Styled.NavLiDiv active={showBooksComponent.toString()}>
                <Styled.NavLiLogo
                  src={bookStoreLogo}
                  alt="책방 버튼 로고"
                  active={showBooksComponent.toString()}
                />
                책방
              </Styled.NavLiDiv>
            </Styled.NavLi>
            <Styled.NavLi
              onClick={handleClickRents}
              active={showRentsComponent.toString()}
            >
              <Styled.NavLiDiv active={showRentsComponent.toString()}>
                <Styled.NavLiRentLogo
                  src={rentButtonLogo}
                  alt="대여하기 버튼 로고"
                  active={showRentsComponent.toString()}
                />
                대여하기
              </Styled.NavLiDiv>
            </Styled.NavLi>
          </Styled.NavList>
        </div>
        <div>
          <Styled.NavSortUl>
            <Styled.NavSortLi
              onClick={handleClickSortCurrent}
              active={sortCurrent.toString()}
            >
              최신순
            </Styled.NavSortLi>
            <Styled.NavSortLi
              onClick={handleClickSortLikes}
              active={sortLikes.toString()}
            >
              좋아요
            </Styled.NavSortLi>
          </Styled.NavSortUl>
        </div>
      </Styled.NavDiv>
      <CategorySelects
        selectCategory={handleSelectCategory}
        handleKeyDownSearch={handleKeyDownSearch}
      />
      {showBooksComponent && (
        <BookContainer
          isBooks={showBooksComponent}
          sortCurrent={sortCurrent}
          currentSortedBooks={currentSortedBooks}
          sortLikes={sortLikes}
          likeSortedBooks={likeSortedBooks}
          currentCategory={category}
          currentCID={CID}
          searchKeyword={searchKeyword}
          isPressEnter={isPressEnter}
        />
      )}
      {showRentsComponent && <Rents />}
    </Styled.BooksContainer>
  );
};

export default BooksContainer;
