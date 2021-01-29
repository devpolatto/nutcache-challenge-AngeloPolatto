import React from 'react';

import { Container, UserName, editButton } from './styles';

function EmployeeItem(props) {


  return (
      <Container>
          <UserName>{props.userName}</UserName>
          <div className="options">
              <button className="btn-edit">Edit</button>
              <button className="btn-delite">Delite</button>
          </div>
      </Container>
  );
}

export default EmployeeItem;