import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 35px;

  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 7px;

  transition: 0.3s;

  &:hover{
      background: #E9E9ED;
  }

  .options{
      width: 100px;

      display: flex;
      justify-content: space-between;

      button{
          width: 48px;
          height: 28px;
          border: none;
          border-radius: 3px;

          background: #F3F8F2;
      }
  }
`;
//Faltab corrigir a margem apenas do primero buttton utilizando o nth-child - (21)

export const UserName = styled.div`
    font-size: 15px;
    font-weight: 700;

`
