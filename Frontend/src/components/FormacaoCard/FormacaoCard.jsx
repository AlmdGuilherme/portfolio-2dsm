import styles from './styles.module.css'

export default function FormacaoCard(props){
  return(
    <section className={styles.formacao_card}>
      <h1 className={styles.card_title}>{props.form_title}</h1>
      <h2 className={styles.card_location}>{props.form_location}</h2>
      <h2 className={styles.card_duration}>{props.form_duration}</h2>
      <p className={styles.card_description}>{props.form_description}</p>
    </section>
  )
}