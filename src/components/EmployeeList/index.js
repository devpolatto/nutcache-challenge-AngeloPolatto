import React, { useState, useEffect } from 'react';
import Employeeitem from '../EmployeeItem';
import Popup from '../Popup';
import FormRegistry from '../FormRegistry';

import db from '../../db.json';

// import API from '../../services/api';

import { Container, Title, Header } from './styles';

function EmployeeList() {

  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   API.get('/user').then( response => {
  //     setUser(response.data)
  //   })
  // }, [user])

  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => { setIsOpen(!isOpen) }

  return (
    <Container>
      <Header>
        <Title>Nutcache Employee Database</Title>
        <button className="buttonNewUser" onClick={togglePopup}>
          NewUser
        </button>
        {isOpen ? <Popup toggle={togglePopup} content={<FormRegistry/>}/> : null}
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