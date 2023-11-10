import styled, { css } from 'styled-components'

interface IInput {
	error?: boolean
}

export const InputStyled = styled.input<IInput>`
  padding: 5px;
  text-align: center;
  outline: none;

  color: white;
  border: 0;
  border-radius: 5px;
  background-color: cornflowerblue;

  ${props => props.error && css<IInput>`
    background-color: red;
  `}
`