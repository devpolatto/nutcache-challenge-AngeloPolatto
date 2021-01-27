import React, { useState } from 'react';
import Popup from '../Popup';

import { Container, UserName } from './styles';

function EmployeeItem(props) {

    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }


  return (
      <Container>
          <UserName>{props.userName}</UserName>
          <div className="options">
              <button onClick={togglePopup}>Editar</button>
              {isOpen && <Popup content={<h2>hello</h2>} handleClose={togglePopup}/>}
                    
              <button>Deletar</button>
          </div>
      </Container>
  );
}

export default EmployeeItem;