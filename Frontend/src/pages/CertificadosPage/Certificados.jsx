import GradientText from "../../components/GradientText/GradientText";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import styles from './styles.module.css'
import CertificadoCard from '../../components/CertificadoCard/CertificadoCard'

// import HTML from '../../assets/HTML5.jpg'

export default function CertificadosPage(){

    const [certList, setcertList] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        fetch('http://localhost:3000/api/certificados') // Atualizei a porta para 3001
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            setcertList(data);
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
        Certificados
      </GradientText>
      <section className={styles.cert_section}>
        {certList && certList.map(certificado => (
          <CertificadoCard
            key={certificado.id}
            img={`http://localhost:3000${certificado.image}`} // Construa a URL completa
            area_cert={certificado.area}
            description={certificado.descricao}
            >
            </CertificadoCard>
        ))}
      </section>
    </main>
  </>
  )
}
