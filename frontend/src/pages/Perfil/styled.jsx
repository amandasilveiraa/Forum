import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export const LeftDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RoundImage = styled.img`
  width: 40vw;
  height: 40vh;
  border-radius: 50%;
`;

export const MiddleDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-left;
  gap: 10vh;
`;

export const RightDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 7vh;
`;

export const Label = styled.label`
  font-size: 16px;
  font-family: Nunito;
`;

export const EditableField = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const EditIcon = styled.span`
  margin-left: 5px;
  cursor: pointer;
`;

export const CustomImg = styled.img`
  height: 3vh;
  width: 3vw;
`;

export const StyledInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;