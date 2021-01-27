import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Formulario from '../src/components/Formulario';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Monica's Gang Quiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The Monica's Gang Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Mostre que você manja muito da turminha</p>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Formulario.Input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Qual o seu nome?"
              />
              <Formulario.Botao type="submit" disabled={name.length === 0}>
                Jogar como
                {' '}
                {name}
              </Formulario.Botao>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Se liga na pergunta</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Bu!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jojoreoli" />
    </QuizBackground>
  );
}

// propriedades / propcidades
// function Title(props) {
//   return (
//     <h1>
//       {props.children}
//     </h1>
//   )
// }
// o const Title styledh1 faz essa funcao toda sozinho
