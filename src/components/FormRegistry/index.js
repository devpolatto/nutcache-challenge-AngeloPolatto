import React from 'react';

import { Container } from './styles';

function FormRegistry() {

  return (
      <Container>
        <form>

          <input type="text"placeholder="Nome *" />
          <input type="email" placeholder="email *" />
          <input type="CPF" placeholder="CPF *" />

          <div className="input-group">
            <input type="date" placeholder="Birth Date *" />
            <select name="select">
              <option value="masculine">masculine</option>
              <option value="feminine">feminine</option>
              <option value="neuter">neuter</option>
            </select>
          </div>

          <input type="text" placeholder="start date " />
          <input type="text" placeholder="Team" />


        </form>
      </Container>
  );
}

export default FormRegistry;