import React, { useState } from 'react';
import Popup from '../Popup';

import PopupConfirm from '../PopupConfirm';
import FormUpdate from '../FormUpdate';

import { Container, UserName } from './styles';

function EmployeeItem({ propID, userName }) {


    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)

    const togglePopupEdit = () => { setIsOpenEdit(!isOpenEdit) }
    const togglePopupDelete = () => { 
        console.log(propID)
        setIsOpenDelete(!isOpenDelete)  
    }

  return (
      <Container>
          <UserName>{userName}</UserName>
          <div className="options">
              <button className="btn-edit" onClick={togglePopupEdit}>Edit</button>
              {isOpenEdit ? <Popup toggle={togglePopupEdit} content={<FormUpdate id={propID}/>}/> : null}
              
              <button className="btn-delite" onClick={togglePopupDelete}>Delite</button>
              {isOpenDelete ? <Popup toggle={togglePopupDelete} content={<PopupConfirm propID={propID} userName={userName}/>}/> : null}
          </div>
      </Container>
  );
}

export default EmployeeItem;