import styles from './styles.module.css'

export default function CertificadoCard(props){
  const areaCertificado = () => {
      if (props.area_cert === 'HTML') {
        return <p className={`${styles.html_Class} ${styles.area}`}>HTML</p>;
      } else if (props.area_cert === 'CSS') {
        return <p className={`${styles.css_Class} ${styles.area}`}>CSS</p>;
      } else if (props.area_cert === 'JS') {
        return <p className={`${styles.js_Class} ${styles.area}`}>JavaScript</p>
      } else if (props.area_cert === 'Python'){
        return <p className={`${styles.py_Class} ${styles.area}`}>Python</p>
      } else if (props.area_cert === 'TS'){
        return <p className={`${styles.ts_Class} ${styles.area}`}>TypeScript</p>
      } else if (props.area_cert === 'Sass'){
        return <p className={`${styles.sass_Class} ${styles.area}`}>Sass</p>
      } else {
        return <p>{props.area_cert}</p>;
      }
    };
  return(
    <>
      <section className={styles.cert_card}>
        <img src={props.img} alt="" className={styles.cert_image}/>
        <section className={styles.infos_cert}>
          {areaCertificado()}
          <p className={styles.cert_desc}>{props.description}</p>
        </section>
      </section>
    </>
  )
}