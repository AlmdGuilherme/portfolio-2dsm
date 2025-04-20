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
    fetch('https://vercel.com/guilherme-almeida-camargos-projects/portfolio-2dsm/CDKbCX1daUKnFmAnrpT3DMdVSWRX/api/habilidades') // Atualizei a porta para 3001
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
    return <div className={styles.infosFetch}>Carregando conteúdo....</div>;
  }
  if (error) {
    return <div className={styles.infosFetch}>Erro ao carregar dados: {error.message}</div>;
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

{/* 
              
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(35, 168, 241, 1)">
                <i className={`${styles.icon} devicon-vscode-plain`}></i>
                <h1 className={styles.tech_name}>VS Code</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(1, 83, 206, 1)">
                <i className={`${styles.icon} devicon-jira-plain`}></i>
                <h1 className={styles.tech_name}>Jira</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(10, 207, 131, 1)">
                <i className={`${styles.icon} devicon-figma-plain`}></i>
                <h1 className={styles.tech_name}>Figma</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 97, 138, 1)">
                <i className={`${styles.icon} devicon-mysql-original`}></i>
                <h1 className={styles.tech_name}>MySql</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(1, 155, 198, 1)">
                <i className={`${styles.icon} devicon-docker-plain`}></i>
                <h1 className={styles.tech_name}>Docker</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(241, 101, 41, 1)">
                <i className={`${styles.icon} devicon-html5-plain`}></i>
                <h1 className={styles.tech_name}>HTML5</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(51, 169, 220, 1)">
                <i className={`${styles.icon} devicon-css3-plain`}></i>
                <h1 className={styles.tech_name}>CSS3</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(240, 219, 79, 1)">
                <i className={`${styles.icon} devicon-javascript-plain`}></i>
                <h1 className={styles.tech_name}>JavaScript</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 122, 204, 1)">
                <i className={`${styles.icon} devicon-typescript-original`}></i>
                <h1 className={styles.tech_name}>TypeScript</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 216, 71, 1)">
                <i className={`${styles.icon} devicon-python-plain`}></i>
                <h1 className={styles.tech_name}>Python</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(203, 102, 153, 1)" >
                <i className={`${styles.icon} devicon-sass-original`}></i>
                <h1 className={styles.tech_name}>Sass</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(97, 218, 251, 1)">
                <i className={`${styles.icon} devicon-react-original`}></i>
                <h1 className={styles.tech_name}>React</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(69, 197, 37, 1)">
                <i className={`${styles.icon} devicon-nodejs-plain`}></i>
                <h1 className={styles.tech_name}>Node JS</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(80, 80, 80, 1)">
                <i className={`${styles.icon} devicon-flask-original`}></i>
                <h1 className={styles.tech_name}>Flask</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(155, 17, 246, 1)">
                <i className={`${styles.icon} devicon-bootstrap-plain`}></i>
                <h1 className={styles.tech_name}>Bootstrap</h1>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(56, 189, 248, 1)">
                <i className={`${styles.icon} devicon-tailwindcss-original`}></i>
                <h1 className={styles.tech_name}>Tailwind</h1>
              </SpotlightCard> */}