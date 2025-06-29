import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useState, useEffect } from "react";
import styles from './styles.module.css'
import GradientText from "../../components/GradientText/GradientText";

export default function Projetos(){
      const [projList, setprojList] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          fetch('https://portfolio-backend-omega-woad.vercel.app/api/projetos') // Atualizei a porta para 3001
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
              setprojList(data);
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
          Projetos
        </GradientText>
        <section className={styles.card_group}>
          {projList && projList.map(projeto => (
            <ProjectCard
            key={projeto.id}
            situation = {projeto.situation}
            img_path ={`https://portfolio-backend-omega-woad.vercel.app${projeto.image}`}
            proj_title={projeto.name}
            owner={projeto.team}
            proj_description={projeto.description}
            proj_link={projeto.link}
            techs={projeto.technologies}>
          </ProjectCard>
          ))}
        </section>
      </main>
    </>
  )
}