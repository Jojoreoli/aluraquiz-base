import React from 'react';
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
import Opcoes from '../src/components/Opcoes';

export default function QuizPage() {
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
            <p>Qual o nome do Cachorro da avó do Xaveco?</p>
            <Opcoes>
              <Opcoes.Opcao>
                <Opcoes.Botao>Floquinho</Opcoes.Botao>
              </Opcoes.Opcao>
              <Opcoes.Opcao>
                <Opcoes.Botao>Genesinho</Opcoes.Botao>
              </Opcoes.Opcao>
              <Opcoes.Opcao>
                <Opcoes.Botao>Ximbuca</Opcoes.Botao>
              </Opcoes.Opcao>
              <Opcoes.Opcao>
                <Opcoes.Botao>Zé Esquecido</Opcoes.Botao>
              </Opcoes.Opcao>
            </Opcoes>
            <Formulario.Botao type="submit">
              Enviar
            </Formulario.Botao>

          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jojoreoli" />
    </QuizBackground>
  );
}
