import React, { useState } from 'react';

import { Container } from './styles';

function FormRegistry() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ cpf, setCPF ] = useState('');
  const [ birthDate , setBirthDate ] = useState('');
  const [ gender , setGender ] = useState('');
  const [ startDate , setStartDate ] = useState('');
  const [ team , setTeam ] = useState('');

  function handleNewUser(e) {
    e.preventDefault()
    const data = { name, email, cpf, birthDate, gender, startDate, team }

    return console.log(data)
  }

  return (
      <Container>

        <h2>Resgistry New User</h2>

        <form onSubmit={handleNewUser}>

          <input type="text" placeholder="Nome *" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" value={email} placeholder="email *" onChange={e => setEmail(e.target.value)} />
          <input type="CPF" value={cpf} placeholder="CPF *" onChange={e => setCPF(e.target.value)} />

          <div className="input-group">
            <div className="date">
              <label for="date">Your Birth Date</label>
              <input type="date" value={birthDate} placeholder="Birth Date *" onChange={e => setBirthDate(e.target.value)} />
            </div>
            <div className="gender">
              <label for="gender">Your Gender</label>
              <select name="gender" value={gender} onChange={e => setGender(e.target.value)}>
                <option value="masculine">masculine</option>
                <option value="feminine">feminine</option>
                <option value="neuter">neuter</option>
              </select>
            </div>
          </div>

          <input type="text" value={startDate} placeholder="start date " onChange={e => setStartDate(e.target.value)} />
          <input type="text" value={team} placeholder="Team" onChange={e => setTeam(e.target.value)} />

          
          <button type="submit" name="registry">Registry</button>

        </form>
      </Container>
  );
}

export default FormRegistry;