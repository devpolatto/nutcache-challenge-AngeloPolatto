import styled from 'styled-components';

const colors = {
    One: "#F3F8F2",
}

export const Container = styled.div`
  width: 80vw;
  heigth: 100vh

  display: flex;

  background: ${colors.One};

  border-radius: 10px;

  box-shadow: 0 0 0.75rem #837676;
`;

export const Header = styled.div`
    width: 100%;
    heigth auto;

    padding: 10px 0;

    display: flex;
    justify-content: center;

    img{
        width: 200px
    }
`
