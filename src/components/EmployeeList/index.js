import React from 'react';
import Employeeitem from '../EmployeeItem';

import { Container, Title } from './styles';

import db from '../../db.json';

function EmployeeList() {

  return (
    <Container>

      <Title>Nutcache Employee Database</Title>

      <ul>
        {db.map(db => (
          <li key={db.id}>
            <Employeeitem userName={db.Name}/>
          </li>
        ))}
      </ul>

    </Container>
  );
}

export default EmployeeList;