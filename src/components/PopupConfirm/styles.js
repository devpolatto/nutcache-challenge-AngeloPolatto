import styled from 'styled-components';
import config from '../../config.json'

export const Container = styled.div`
  Display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 150px;

  .confirm{
      font-size: 20px !important;
      width: 200px !important;
      height: 100px !important;
      background: ${config.color.quaternary}
      transition: 0.3s;
    };

    .confirm:hover {
        background: ${config.color.septenary} !important;
        color: #ffffff
    }

`;

export const Description = styled.h2`
    font-size: 20px;
    font-family: 'Lato', sans-serif;
`
