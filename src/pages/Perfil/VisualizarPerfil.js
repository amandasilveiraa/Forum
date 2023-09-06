import React, { useState } from 'react';
import perfilFoto from '../../assets/profile.svg'
import pencilImg from '../../assets/editPencil.svg'
import { CustomImg, EditableField, EditIcon, Label, LeftDiv, MiddleDiv, PageContainer, RightDiv, RoundImage, StyledInput } from './styled';

const App = () => {
  const [name, setName] = useState('Angela Koch');
  const [email, setEmail] = useState('0632454567@senacrs.edu.br');
  const [password, setPassword] = useState('********');
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  return (
    <PageContainer>

      <LeftDiv>
        <RoundImage src={perfilFoto} alt="Imagem de Perfil" />
      </LeftDiv>

      <MiddleDiv>
        <Label>Name:</Label>
        <Label>Email:</Label>
        <Label>Password:</Label>
      </MiddleDiv>

      <RightDiv>

        <EditableField>
          {editName ? (
            <StyledInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <span>{name}</span>
          )}
          <EditIcon onClick={() => setEditName(!editName)}>
          <CustomImg src={pencilImg} alt="Pencil"/>
          </EditIcon>
        </EditableField>

        <EditableField>
          {editEmail ? (
            <StyledInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <span>{email}</span>
          )}
          <EditIcon onClick={() => setEditEmail(!editEmail)}>
            <CustomImg src={pencilImg} alt="Pencil"/>
          </EditIcon>
        </EditableField>
        
        <EditableField>
          {editPassword ? (
            <StyledInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : (
            <span>{password}</span>
          )}
          <EditIcon onClick={() => setEditPassword(!editPassword)}>
            <CustomImg src={pencilImg} alt="Pencil"/>
          </EditIcon>
          
        </EditableField>

      </RightDiv>

    </PageContainer>
  );
};

export default App;
