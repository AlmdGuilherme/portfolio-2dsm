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
      fetch(`https://portfolio-backend-omega-woad.vercel.app/api/formacao-academica`)
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
