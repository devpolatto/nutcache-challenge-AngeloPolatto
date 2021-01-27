import React, { useState } from 'react';
import Employeeitem from '../EmployeeItem';
//import FormRegistry from '../FormRegistry';

import { Container, Title, Header } from './styles';

import db from '../../db.json';

function EmployeeList() {

  return (
    <Container>
      <Header>
        <Title>Nutcache Employee Database</Title>
        <button className="buttonNewUser">
          NewUser
        </button>
      </Header>
      

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