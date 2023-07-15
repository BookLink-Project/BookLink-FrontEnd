import styled from 'styled-components';

//[ BookAside ]
export const BookAside = styled.aside`
  width: 34rem;
`;

export const BookAsideSection = styled.div`
  margin-top: 2.71rem;

  &:first-child {
    margin-top: 0;
  }
`;

export const AsideCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    background: 0;

    div {
      color: #848484;
      font-size: 0.85714rem;
      font-weight: 500;
    }
  }

  h2 {
    font-size: 1.71429rem;
    font-weight: 500;
  }
`;

// [ aside card section 1]

export const AsideCard1 = styled.li`
  display: flex;
  align-items: center;
  border-radius: 0.85714rem;
  border: 1px solid #d9d9d9;
  width: 33.14286rem;
  height: 6.85714rem;
  margin-top: 1.71rem;
  margin-bottom: 0.86rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AsideCard1_ImageDiv = styled.div`
  width: 3.85714rem;
  height: 5.85714rem;
  border-radius: 0.85714rem;
  background: #f4f4f4;
  padding: 0.5rem 1rem;
  margin-right: 0.86rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const AsideCard1_ContentDiv = styled.div`
  h3 {
    color: #3a3a3a;
    font-size: 1.14286rem;
    font-weight: 500;
  }
  ul {
    display: flex;
    align-items: center;

    li {
      span {
        color: #848484;
        font-size: 0.85714rem;
        font-weight: 400;
        margin-right: 0.57rem;
      }

      strong {
        color: #000;
        font-size: 0.85714rem;
        font-weight: 400;
      }

      &:first-child {
        margin-right: 1.14rem;
      }
    }
  }
`;

// [ aside card section 2]

export const AsideCard2 = styled.ul`
  display: flex;
  align-items: center;
  border-radius: 0.85714rem;
  border: 1px solid #d9d9d9;
  width: 33.14286rem;
  margin-top: 1.71rem;
  margin-bottom: 0.86rem;
`;

export const AsideCard2_ImageDiv = styled.div`
  width: 3.42857rem;
  height: 3.42857rem;
  border-radius: 50%;
  margin: 0.86rem;
  background-color: #00e37d;
`;

export const AsideCard2_UserInfoDiv = styled.div`
  span {
    color: #d9d9d9;
    font-size: 0.85714rem;
    font-weight: 400;

    &:first-child {
      color: #3a3a3a;
      font-size: 1.14286rem;
      font-weight: 500;
      margin-right: 0.86rem;
    }
  }
`;

export const AsideCard2_RentInfoDiv = styled.div`
  ul {
    display: flex;
    align-items: center;

    li {
      margin-right: 1.14rem;

      &:last-child {
        margin-right: 0;
      }

      span {
        color: #848484;
        font-size: 0.85714rem;
        font-weight: 400;
        margin-right: 0.57rem;

        &:last-child {
          margin-right: 0;
          color: #000;
          font-size: 0.85714rem;
          font-weight: 700;
        }
      }
    }
  }
`;

//[aside card3]

export const AsideCard3 = styled.ul`
  padding: 0.57rem 0.86rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  li:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  border-radius: 0.85714rem;
  border: 1px solid #d9d9d9;
  width: 33.14286rem;
  margin-top: 1.71rem;
  margin-bottom: 0.86rem;

  h4 {
    color: #3a3a3a;
    font-size: 1.14286rem;
    font-weight: 700;
  }

  span,
  p {
    color: #848484;
    font-size: 0.85714rem;
    font-weight: 400;
  }
`;

export const AsideCard3_UserInfoDiv = styled.div`
  display: flex;
  align-items: center;

  div:first-child {
    width: 1.28571rem;
    height: 1.28571rem;
    border-radius: 50%;
    background-color: #d9d9d9;
    margin-right: 0.57rem;
  }
`;
