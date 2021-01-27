import React from 'react';

import { Container, UserName } from './styles';

function EmployeeItem(props) {


  return (
      <Container>
          <UserName>{props.userName}</UserName>
          <div className="options">
              <button >
                Editar
              </button>
                    
              <button>Deletar</button>
          </div>
      </Container>
  );
}

export default EmployeeItem;