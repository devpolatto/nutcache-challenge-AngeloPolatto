import React from 'react';

import { Container } from './styles';

function FormRegistry() {

  return (
      <Container>
        <form>

          <input placeholder="Nome *" />
          <input type="email" placeholder="email *" />
          <input type="CPF" placeholder="CPF *" />

          <div className="input-group">
            <input placeholder="Birth Date *" />
            <input placeholder="gender *" />
          </div>

          <input type="text" placeholder="start date *" />
          <input type="text" placeholder="Team" />

          <button>Registry</button>

        </form>
      </Container>
  );
}

export default FormRegistry;