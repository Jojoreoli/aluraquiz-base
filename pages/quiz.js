import React from 'react';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Formulario from '../src/components/Formulario';
import Opcoes from '../src/components/Opcoes';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h1>Carregando...</h1>
      </Widget.Header>
      <Widget.Content>
        <p>AAAAAAAAAAA</p>
      </Widget.Content>
    </Widget>
  );
}

function ResultadoWidget({ results }) {
  return (

    <Widget>
      <Widget.Header>
        <h1>Resultados</h1>
      </Widget.Header>
      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {results.filter((x) => x).length}
          {' '}
          pergunta(s)
        </p>
        <ul>
          {results.map((result, index) => {
            <li key={`result__${result}`}>
              {index + 1}
              asdasd
              { result === true
                ? 'Acertou'
                : 'Errou' }
            </li>;
          })}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  const isCorrect = selectedAlternative === question.answer;
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          Pergunta
          {' '}
          {`${questionIndex + 1}`}
          {' '}
          de
          {' '}
          {`${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h3>{question.title}</h3>
        <p>{question.description}</p>
        <Opcoes onSubmit={(event) => {
          event.preventDefault();
          setIsQuestionSubmited(true);
          setTimeout(() => {
            addResult(isCorrect);
            onSubmit();
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
          }, 1 * 1000);
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Opcoes.Opcao
                htmlFor={alternativeId}
                key={alternativeId}
              >
                <Opcoes.Botao
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Opcoes.Opcao>
            );
          })}
          <Formulario.Botao type="submit" disabled={!hasAlternativeSelected}>
            Enviar
          </Formulario.Botao>
          {isQuestionSubmited && isCorrect && <p>Correto</p>}
          {isQuestionSubmited && !isCorrect && <p>Errou</p>}
        </Opcoes>

      </Widget.Content>
    </Widget>
  );
}
const screenStates = {
  QUIZ: 'QUIZ',
  CARREGANDO: 'CARREGANDO',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.CARREGANDO);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Monica's Gang Quiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
        <QuestionWidget
          question={question}
          totalQuestions={totalQuestions}
          questionIndex={questionIndex}
          onSubmit={handleSubmit}
          addResult={addResult}
        />
        )}
        {screenState === screenStates.CARREGANDO && <LoadingWidget />}
        {screenState === screenStates.RESULT && <ResultadoWidget results={results} />}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jojoreoli" />
    </QuizBackground>
  );
}
