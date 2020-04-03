import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;

  input {
    flex: 1;
    padding: 10px;
    border-radius: 6px;
    color: #242526;
    border: 1px solid #eee;
    font-size: 16px;
    transition: border 0.2s;
    &:focus {
      border: 3px solid #333;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 1);
    }
  }
`;

const rotato = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #18191a;
  border: none;
  padding: 15px;
  border-radius: 4px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #5c9800;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotato} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin-top: 15px;
  background: white;
  padding: 15px;
  border-radius: 10px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 10px;
    transition: box-shadow 0.2s;
    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
    span {
      color: #18191a;
    }
    a {
      color: #18191a;
      font-weight: bold;
      text-decoration: none;
      padding: 3px 8px;
      transition: all 0.2s;

      &:hover {
        background: #5c9800;

        color: white;
        border-radius: 5px;
      }
    }
    &:hover {
      background: white;
    }
  }
`;
