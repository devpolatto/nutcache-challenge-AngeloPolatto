import React, { useState, useEffect } from 'react';
import Employeeitem from '../EmployeeItem';
import Popup from '../Popup';
import FormRegistry from '../FormRegistry';

import API from '../../services/api';

import { Container, Title, Header } from './styles';

function EmployeeList() {

  const [userName, setUserName] = useState([]);

  useEffect(() => {
    const response  = API.get('/newuser').then(response => {
      setUserName(response.data)
    })
  }, [userName])

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
        {userName.map(userName => (
          <li key={userName._id}>
            <Employeeitem userName={userName.name}/>
          </li>
        ))}
      </ul>

    </Container>
  );
}

export default EmployeeList;