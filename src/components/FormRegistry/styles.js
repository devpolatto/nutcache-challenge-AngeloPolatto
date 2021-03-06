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
    justify-content: space-around;
    flex-direction: column;

    > input {
      font-size: 15px;
      font-family: 'Lato', sans-serif;
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
    margin: 10px 0;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
      background: ${config.color.primary}
    }
  }
`;

export const TitleForm = styled.h1`
  font-family: 'Lato', sans-serif;
`
export const LabelForm = styled(TitleForm)`
  font-size: 15px;
`

