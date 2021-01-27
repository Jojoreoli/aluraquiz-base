import styled from 'styled-components';

const Opcoes = styled.form`
  width: 100%;
  padding:.1rem;
  display: flex;
  flex-direction: column;
`;

Opcoes.Opcao = styled.label`
  padding: .3rem;
  background: ${({ theme }) => theme.colors.secondary};
  margin-top: .5rem;
  border: 1px solid green;
  border-radius: 15px;
  font-size: 1.5rem;
  font-weight: 300;
  text-decoration: none;
  outline: 0;
`;

Opcoes.Botao = styled.input`
  /* display: none; */
  transition: .3s;
`;

export default Opcoes;
