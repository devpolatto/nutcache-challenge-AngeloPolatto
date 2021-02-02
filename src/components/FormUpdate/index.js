import React, { useState } from 'react';

import { Container, TitleForm, LabelForm } from './styles';

function FormUpdate() {
  return(
        <Container>

            <TitleForm>User registration</TitleForm>

            <form>
                <LabelForm>Your Name</LabelForm>
                <input type="text" required />
                <LabelForm>Your E-mail</LabelForm>
                <input type="email" required />
                <LabelForm>Your CPF</LabelForm>
                <input type="text" placeholder="Ex: 000000-00" required />

                <div className="input-group">
                    <div className="date">
                    <LabelForm>Your Birth Date</LabelForm>
                    <input type="date" placeholder="Birth Date" required />
                    </div>
                    <div className="gender">
                    <LabelForm>Your Gender</LabelForm>
                    <select name="gender" required >
                        <option value="" selected disabled hidden >Chose here</option>
                        <option value="masculine">Masculine</option>
                        <option value="feminine">Feminine</option>
                        <option value="neuter">Neuter</option>
                    </select>
                    </div>
                    <div className="team">
                    <LabelForm>Team</LabelForm>
                    <select name="team" required >
                        <option value="" selected disabled hidden >Chose here</option>
                        <option value="front-end">Front-End</option>
                        <option value="back-end">Back-End</option>
                        <option value="mobile">Mobile</option>
                    </select>
                    </div>
                </div>

                <div className="startDate">
                    <LabelForm>Start Date</LabelForm>
                    <input type="date" />
                </div>

                <button type="submit" name="registry">Update</button>
            </form>
        </Container>
    );
}

export default FormUpdate;