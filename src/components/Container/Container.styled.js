import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    max-width: 450px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1186px) {
    width: 1186px;
  }
`;
