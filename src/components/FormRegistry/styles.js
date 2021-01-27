import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  color: black;

  form {
    width: 80%;

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
    }



    .input-group input:nth-child(1) {
      margin-right: 10px;
    }

    .input-group{
      display: flex;
      
      margin-bottom: 5px;
    }
  }

`;


