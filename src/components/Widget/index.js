import styled from 'styled-components';

// Componente caixinhas
const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  font-family: 'Londrina Solid', cursive;

  h1, h2, h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1;
  }
`;

// Componente cabecalho
Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

// Componente Conteudo
Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *: first-child{
    margin-top:0;
  }
  & > *: last-child{
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding_ 0;
  }
`;

export default Widget;
