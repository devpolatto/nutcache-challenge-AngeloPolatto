import React from 'react';

import { Container, Description } from './styles';

function PopupConfirm() {
  return(
      <Container>
          <Description>Are you sure you want to delete the user ?</Description>
          <button className="confirm">Yes!</button>
      </Container>
  )
}

export default PopupConfirm;