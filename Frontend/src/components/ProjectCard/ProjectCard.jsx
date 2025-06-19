import React from 'react'
import styles from './styles.module.css'

export default function ProjectCard(props){
  const situacaoProj = () => {
    if (props.situation === 'Concluído') {
      return <p className={styles.concluded}>Concluido</p>;
    } else if (props.situation === 'Em Desenvolvimento') {
      return <p className={styles.development}>Em Desenvolvimento</p>;
    } else {
      return <p>{props.situation}</p>;
    }
  };
  return(
    <section className={styles.project_card}>
      <img src={props.img_path} alt="" className={styles.proj_img}/>
      {situacaoProj()}
      <section className={styles.proj_infos}>
        <section className={styles.proj_texts}>
          <a href={props.proj_link} className={styles.project_link}>{props.proj_title}</a>
          <h2>{props.owner}</h2>
          <h3>{props.proj_description}</h3>
        </section>
        <section className={styles.proj_tecs}>
          {Array.isArray(props.techs) ? (
            props.techs.map((tech, index) => (
              <i key={index} className={`${tech.icon}`}></i> 
            ))
          ) : (
            <i className={`${props.techs}`}></i> 
          )}
        </section>
      </section>
    </section>
  )
}