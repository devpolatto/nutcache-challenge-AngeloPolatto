import React from 'react';
import API from '../../services/api';

import { Container, Description } from './styles';

function PopupConfirm({ propID, userName }) {

  async function handleUserDelete(userID){

    try{
      const response = await API.delete(`/user/${userID}`)
    } catch (err) {
      alert('Erro ao cadastrar')
    }
  }

  return(
      <Container>
          <Description>Are you sure you want to delete the user ?</Description>
          <button className="confirm" onClick={() => handleUserDelete(propID)}>Yes!</button>
      </Container>
  )
}

export default PopupConfirm;