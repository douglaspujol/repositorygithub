import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: 100vh;
`;
export const Owner = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    padding: 15px;
    border-radius: 4px;
    text-decoration: none;
    color: #fff;
    &:hover {
      background: #5c9800;
    }
  }

  img {
    border-radius: 50%;
    width: 120px;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssuesList = styled.ul`
  margin-top: 15px;

  background: white;
  padding: 15px;
  border-radius: 10px;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 10px;
    transition: box-shadow 0.2s;
    img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      margin-right: 15px;
      border: 1px solid #eee;
    }
    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;
      }
      strong a {
        text-decoration: none;
        color: #333;
      }

      strong span {
        background: #eee;
        font-size: 12px;

        font-weight: 600;
        padding: 3px 4px;
        border-radius: 2px;
        color: #333;
        margin: 0 10px;
      }
      p {
        margin-top: 5px;
        color: #c9c9c9;
      }
    }
  }
`;
