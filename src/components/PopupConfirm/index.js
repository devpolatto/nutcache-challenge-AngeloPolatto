import React from 'react';
import API from '../../services/api';

import { Container, Description } from './styles';

function PopupConfirm(props) {

  async function handleUserDelete(id){

    await console.log(`user : ${id}`)

    try{
      await API.delete(`/user/${id}`)
    } catch (err) {
      alert('Erro ao cadastrar')
    }
  }

  return(
      <Container>
          <Description>Are you sure you want to delete the user ?</Description>
          <button className="confirm" onClick={() => handleUserDelete(props.propID)}>Yes!</button>
      </Container>
  )
}

export default PopupConfirm;