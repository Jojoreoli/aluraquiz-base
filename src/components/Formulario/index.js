import styled from 'styled-components';

// Component Form
export const Formulario = styled.form;

// Component Input
Formulario.Input = styled.input`
  width: 100%;
  padding: .5rem;
  border: 1px solid ${({ theme }) => theme.colors.contrastText};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.mainBg};
`;

// Component botao
Formulario.Botao = styled.button`
  width: 100%;
  margin-top: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 3px;
  font-family: 'Londrina Solid', cursive;
  font-size: 1.5rem;
  font-weight: 300;
`;

export default Formulario;
