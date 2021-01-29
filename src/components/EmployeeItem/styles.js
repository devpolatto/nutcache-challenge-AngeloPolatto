import styled from 'styled-components';
import config from '../../config.json';

export const Container = styled.div`
  width: 100%;
  height: 35px;

  padding: 3px 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 7px;

  transition: 0.3s;

  &:hover{
      background: ${config.color.quaternary}
  }

  .options{
      width: 100px;
      heigth: 100%;
      display: flex;
      justify-content: space-between;

      button:nth-child(1){
        margin-right    : 5px;
      }

      button{
        width: 60px;
        height: 100%;
        font-size: 16px;
        font-family: 'Lato', sans-serif;
        border: none;
        border-radius: 7px;
        cursor: pointer;
        transition: 0.3s;
      }
  }
`;
//Faltab corrigir a margem apenas do primero buttton utilizando o nth-child - (21)

export const UserName = styled.div`
    font-size: 16px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
`
