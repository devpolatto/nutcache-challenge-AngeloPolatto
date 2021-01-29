import styled from 'styled-components';
import config from '../../config.json';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: black;

  form {
    width: 100%;

    margin-top: 20px;

    display: flex;
    aling-items: center;
    justify-content: space-around;
    flex-direction: column;

    > input {
      margin-bottom: 5px;
    }

    .input-group {
      width: 100%;
      display: flex;
      flex-direction: row;

      margin-bottom: 5px;

      .date {
        width: 100%;
        display: flex;
        flex-direction: column;

        margin-right: 10px;
      }
      .gender{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-right: 10px;
      }
      .team{
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    }

    .startDate {
      display: flex;
      flex-direction: column;

      margin-bottom: 5px;
    }
  }

  button{
    height: 50px;
    color: #ffff;
    background: ${config.color.secondary};
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
      background: ${config.color.primary}
    }
  }
`;


