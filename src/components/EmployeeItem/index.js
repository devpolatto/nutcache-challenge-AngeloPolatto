import React, { useState } from 'react';
import Popup from '../Popup';

import { Container, UserName, editButton } from './styles';

function EmployeeItem(props) {

    const [ isOpenDelete, setOpenDelete ] = useState(false);
    const [ isOpenEdit, setOpenEdit ] = useState(false);

    const togglePopupEdit = () => { setOpenEdit(!isOpenEdit) }
    const togglePopupDelete = () => { setOpenDelete(!isOpenDelete) }

    return (
        <Container>
            <UserName>{props.userName}</UserName>
            <div className="options">
                <button className="btn-edit" onClick={togglePopupEdit}>Edit</button>
                {isOpenEdit ? <Popup toggle={togglePopupEdit} content={<h2>Edit</h2>}/> : null}

                <button className="btn-delite" onClick={togglePopupDelete}>Delete</button>
                {isOpenDelete ? <Popup toggle={togglePopupDelete} content={<h2>Delete</h2>}/> : null}
            </div>
        </Container>
    );
}

export default EmployeeItem;