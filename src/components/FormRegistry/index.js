import React, { useState } from 'react';
import API from '../../services/api';

import { Container, TitleForm, LabelForm } from './styles';

function FormRegistry() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ cpf, setCPF ] = useState('');
  const [ birthDate , setBirthDate ] = useState('');
  const [ gender , setGender ] = useState('');
  const [ startDate , setStartDate ] = useState('');
  const [ team , setTeam ] = useState('');

  async function handleNewUser(e) {
    //e.preventDefault();
    const data = { name, email, cpf, birthDate, gender, startDate, team }

    try{
      const response = await API.post('/newuser', data);
      //alert(`usuario ${ data.name } registrado`)
    } catch(err) {
      alert('erro no cadastro, tente novamente')
      console.log(err)
    }
    return console.log(data)
  }

  return (
      <Container>

        <TitleForm>Registry new user</TitleForm>

        <form onSubmit={handleNewUser}>

          <LabelForm>Your Name</LabelForm>
          <input type="text" value={name} required onChange={e => setName(e.target.value)} />
          <LabelForm>Your E-mail</LabelForm>
          <input type="email" value={email} required onChange={e => setEmail(e.target.value)} />
          <LabelForm>Your CPF</LabelForm>
          <input type="text" value={cpf} required onChange={e => setCPF(e.target.value)} />

          <div className="input-group">
            <div className="date">
              <LabelForm>Your Birth Date</LabelForm>
              <input type="date" value={birthDate} placeholder="Birth Date" required onChange={e => setBirthDate(e.target.value)} />
            </div>
            <div className="gender">
              <LabelForm>Your Gender</LabelForm>
              <select name="gender" value={gender} required onChange={e => setGender(e.target.value)}>
                <option value="" selected disabled hidden >Chose here</option>
                <option value="masculine">Masculine</option>
                <option value="feminine">Feminine</option>
                <option value="neuter">Neuter</option>
              </select>
            </div>
            <div className="team">
              <LabelForm>Team</LabelForm>
              <select name="team" value={team} required onChange={e => setTeam(e.target.value)}>
                <option value="" selected disabled hidden >Chose here</option>
                <option value="front-end">Front-End</option>
                <option value="back-end">Back-End</option>
                <option value="mobile">Mobile</option>
              </select>
            </div>
          </div>

          <div className="startDate">
            <LabelForm>Start Date</LabelForm>
            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
          </div>

          <button type="submit" name="registry">Registry</button>

        </form>
      </Container>
  );
}

export default FormRegistry;