import styled from 'styled-components';

export const StyledMovieInfoBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100px;
  height: auto;
  background: #1c1c1c;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
  font-size: 20px;

  .movieinfobar-content {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    color: #fff;
  }

  .movieinfobar-content-col {
    float: left;
    width: 33.33%;
    box-sizing: border-box;
  }

  .movieinfobar-info {
    padding: 5px 0 0 10px;
    float: left;
  }

  .time,
  .revenue,
  .budget
  {
    float: left;
    margin-top: -1px;
    font-size: 36px;

  }

  @media screen and (max-width: 768px) {
    .time,
    .revenue,
    .budget {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
