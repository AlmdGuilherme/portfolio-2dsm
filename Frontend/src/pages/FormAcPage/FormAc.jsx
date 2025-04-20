import FormacaoCard from "../../components/FormacaoCard/FormacaoCard";
import { useState, useEffect } from "react";
import GradientText from "../../components/GradientText/GradientText";
import Navbar from "../../components/Navbar/Navbar";
import styles from './styles.module.css'

export default function FormAcPage(){

  const [formList, setformList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://portfolio-2dsm.vercel.app/api/formacao-academica') // Atualizei a porta para 3001
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setformList(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div className={styles.infoFetch}>Carregando conteúdo....</div>;
    }
    if (error) {
      return <div className={styles.infoFetch}>Erro ao carregar dados: {error.message}</div>;
    }
  return(
    <>
      <Navbar></Navbar>
      <main className={styles.p_main}>
          <GradientText 
          animationSpeed={9}
          className={styles.title} colors={['#566573', '#C0C0C0', '#566573', '#C0C0C0', '#566573']}>
            Formação Acadêmica
          </GradientText>
        <section className={styles.form_group}>
          {formList && formList.map(formacao => (
            <FormacaoCard
            key={formacao.id}
            form_title={formacao.nome}
            form_location={formacao.local}
            form_duration={formacao.periodo}
            form_description={formacao.descricao}
          ></FormacaoCard>
          ))}
        </section>
      </main>
    </>
  )
}

          {/* <FormacaoCard
            form_title='Ensino Médio - Técnico em Informática'
            form_location='Colégio Joseense'
            form_duration='2020 - 2022'
            form_description='Introdução a programção (HTML, CSS e JavaScript), noção de hardware e programação de jogos (Unreal).'
          ></FormacaoCard>
          <FormacaoCard
            form_title='Inglês'
            form_location='Wizard'
            form_duration='2017 - 2022'
            form_description='Curso voltado para aprendizagem de lingua estrangeira.'
          ></FormacaoCard>
          <FormacaoCard
            form_title='Desenvolvedor Full Stack'
            form_location='One Bit Code'
            form_duration='2022 - Presente'
            form_description='Cuso voltado para as principais tecnologias utilizadas para desenvolvimento web, do básico ao avançado.'
          ></FormacaoCard>
          <FormacaoCard
            form_title='Desenvolvedor Python'
            form_location='One Bit Code'
            form_duration='2023 - Presente'
            form_description='Curso voltado para a linguagem python, do básico ao avançado (automações, banco de dados e IA)'
          ></FormacaoCard>
          <FormacaoCard
            form_title='Ensino Superior'
            form_location='Fatec'
            form_duration='2024 - Presente'
            form_description='Atualmente, estou cursando Desenvolvimento de Software Multiplataforma na Fatec-SJC'
          ></FormacaoCard> */}