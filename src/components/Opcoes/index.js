import styled from 'styled-components';

export const Opcoes = styled.ul`
  width: 100%;
  padding:.1rem;
`;

Opcoes.Opcao = styled.li`
  padding: .3rem;
  background: ${({ theme }) => theme.colors.secondary};
  margin-top: .5rem;
  border: 1px solid green;
  border-radius: 15px;
`;

Opcoes.Botao = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.contrastText};
  font-family: 'Londrina Solid', cursive;
  font-size: 1.5rem;
  font-weight: 300;
`;

export default Opcoes;
