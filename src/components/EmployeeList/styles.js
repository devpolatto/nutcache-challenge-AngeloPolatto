import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px 30px;

    ul{
      width: 100%;
    }
`;

export const Header = styled.div`
    width: 100%;

    position: relative;
    top: -20px;

    margin-bottom: 30px;

    display: flex;
    align-items: center;
    justify-content: space-around;

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
      }
    }

    .buttonNewUser:hover{
      background: #47D1FF;
    }
`
export const Title = styled.header`
  font-size: 24px;
`
