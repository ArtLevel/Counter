import styled from 'styled-components'

export const ButtonStyled = styled.button`
  width: 40%;
  height: 50px;

  color: white;

  border: none;
  border-radius: 5px;
  background-color: cornflowerblue;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: grey;
  }
`