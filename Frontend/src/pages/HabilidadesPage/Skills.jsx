import Navbar from "../../components/Navbar/Navbar";
import React, {useState, useEffect} from "react";
import SpotlightCard from "../../components/SpotlightCard/SpotligthCard";
import GradientText from '../../components/GradientText/GradientText'
import styles from './styles.module.css'

function Skill() {
  const [skillList, setSkillList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://portfolio-backend-omega-woad.vercel.app/api/habilidades')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setSkillList(data);
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

  return (
    <>
      <Navbar />
      <main className={styles.p_main}>
        <GradientText
          animationSpeed={9}
          className={styles.title}
          colors={['#566573', '#C0C0C0', '#566573', '#C0C0C0', '#566573']}>
          Habilidades
        </GradientText>
        <section className={styles.tech_group}>
          {skillList && skillList.map(skill => (
            <SpotlightCard key={skill.id} className="custom-spotlight-card" spotlightColor={skill.rgba}>
              <i className={`${styles.icon} ${skill.iconClass}`}></i>
              <h1 className={styles.tech_name}>{skill.nome}</h1>
            </SpotlightCard>
          ))}
        </section>
      </main>
    </>
  );
}

export default Skill;