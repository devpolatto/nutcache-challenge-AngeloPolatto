import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: black;

  form {
    width: 80%;

    margin-top: 20px;

    display: flex;
    aling-items: center;
    justify-content: space-around;
    flex-direction: column;

    .buttonNewUser{
      width: 80px;
      height: 30px;

      border: none;
      border-radius: 7px;

      background: #008AB8;
      color: #ffff;

      transition: 0.3s;

      &:hover{
        backgorund: #47D1FF;
      };
    }

    > input {
      width: 100%;
      height: 40px;
      margin-bottom: 5px;
      border: none;
      border-radius: 7px;
      background: #efeeee;
      padding-left: 5px;
    }

    .input-group input:nth-child(1) {
      margin-right: 10px;
      height: 40px;
      border: none;
      border-radius: 7px;
      background: #efeeee;
      padding-left: 5px;
    }

    .input-group {
      width: 70%;
      display: flex;
      flex-direction: row;

      margin-bottom: 5px;

      .date {
        display: flex;
        flex-direction: column;

        margin-right: 10px;

        input {
          height: 40px;
          border: none;
          border-radius: 7px;
          background: #efeeee;
          padding-left: 5px;
        }
      }

      .gender{
        display: flex;
        flex-direction: column;

        select{
          height: 40px;
          border: none;
          border-radius: 7px;
          background: #efeeee;
          padding-left: 5px;
        }

      }

    }

    .input-group .date select {
        border: none;
        border-radius: 7px;
        background: #efeeee;
    }

    .input-group{
      display: flex;
      
      
    }
  }

  .input-goup .gender {
    display: flex;
    flex-direction: column;
  }
  
  button{
    height: 50px;
    color: #ffff;
    background: #54cec8;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`;


