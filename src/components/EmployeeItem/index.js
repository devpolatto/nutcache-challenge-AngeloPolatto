import React, { useState } from 'react';
import Popup from '../Popup';

import PopupConfirm from '../PopupConfirm';

import { Container, UserName, editButton } from './styles';

function EmployeeItem(props) {

    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)

    const togglePopupEdit = () => { setIsOpenEdit(!isOpenEdit) }
    const togglePopupDelete = () => { setIsOpenDelete(!isOpenDelete) }


  return (
      <Container>
          <UserName>{props.userName}</UserName>
          <div className="options">
              <button className="btn-edit" onClick={togglePopupEdit}>Edit</button>
              {isOpenEdit ? <Popup toggle={togglePopupEdit} content={<h2>Edit</h2>}/> : null}
              
              <button className="btn-delite" onClick={togglePopupDelete}>Delite</button>
              {isOpenDelete ? <Popup toggle={togglePopupDelete} content={<PopupConfirm/>}/> : null}
          </div>
      </Container>
  );
}

export default EmployeeItem;