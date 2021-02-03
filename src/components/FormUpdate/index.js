import React, { useState, useEffect, useReducer } from 'react';
import API from '../../services/api';

import { Container, TitleForm, LabelForm } from './styles';

function FormUpdate({ id }) {

    const [ user, setUser ] = useState([])

    useEffect(() => {
        API.get(`/user/${id}`).then(response => { setUser(response.data[0]) });
    }, []);

    const [ name, setName ] = useState(user.name)

    const changeValue = val => {
        setName(val); alert(`Novo nome ${name}`)
    }

    // async function handleUserUpdate(e){
    //     console.log
    // }


    return(
        <Container>

            <TitleForm>User registration</TitleForm>

            <form>
                <LabelForm>Your Name</LabelForm>
                <input type="text" value={user.name} required />
                <LabelForm>Your E-mail</LabelForm>
                <input type="email" value={user.email} required />
                <LabelForm>Your CPF</LabelForm>
                <input type="text" value={user.CPF} required />

                <div className="input-group">
                    <div className="date">
                    <LabelForm>Your Birth Date</LabelForm>
                    <input type="date" value={user.birthDate} required />
                    </div>
                    <div className="gender">
                    <LabelForm>Your Gender</LabelForm>
                    <select name="gender" value={user.gender} required >
                        <option value="" selected disabled hidden >Chose here</option>
                        <option value="masculine">Masculine</option>
                        <option value="feminine">Feminine</option>
                        <option value="neuter">Neuter</option>
                    </select>
                    </div>
                    <div className="team">
                    <LabelForm>Team</LabelForm>
                    <select name="team" value={user.team} required >
                        <option value="" selected disabled hidden >Chose here</option>
                        <option value="front-end">Front-End</option>
                        <option value="back-end">Back-End</option>
                        <option value="mobile">Mobile</option>
                    </select>
                    </div>
                </div>

                <div className="startDate">
                    <LabelForm>Start Date</LabelForm>
                    <input type="date" value={user.startDate} />
                </div>

                <button type="submit" name="registry">Update</button>
            </form>
        </Container>
    );
}

export default FormUpdate;