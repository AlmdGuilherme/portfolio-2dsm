import Navbar from "../../components/Navbar/Navbar";
import styles from './styles.module.css'
import profilePic from '../../assets/profile-pic.jpg'
import Curriculo from '../../assets/Curriculo.pdf'

export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <main className={styles.p_main}>
        <section className="ss:max-1xl:w-full ss:max-lg:border-r-0 ss:max-lg:border-b-2 ss:max-1xl:pb-4
         flex flex-col items-center justify-center h-auto w-[60%] gap-10 border-r-2 border-white">
          <section className="ss:max-md:flex-col flex h-70% w-full items-center justify-evenly gap-4">
            <img src={profilePic} alt="" className={styles.profile_pic} />
            <h2 className="text-white text-4xl font-extrabold text-center">
              Guilherme Almeida
            </h2>
          </section>
          <section className="ss:max-md:flex-col-reverse flex h-30% w-full items-center justify-around gap-4">
            <section className="ss:max-md:w-[70%] flex justify-between items-center w-[30%]">
              <a className={`${styles.links} ${styles.Li}`} href="https://www.linkedin.com/in/guilherme-almeida-profile/"><i className={`${styles.icon} devicon-linkedin-plain`}></i></a>
              <a className={`${styles.links} ${styles.Gh}`} href="https://github.com/AlmdGuilherme"><i className={`${styles.icon} devicon-github-original`}></i></a>
              <a className={`${styles.links} ${styles.Em}`} href="mailto:guilhermecamargo_@outlook.com"><ion-icon className={`${styles.icon} devicon-email`} name="mail-outline"></ion-icon></a>
            </section>
            <button className="pr-6 pl-6 pt-3 pb-3 text-center bg-white rounded-full text-2xl font-extrabold shadow-0xl">
              <a className={`${styles.links} ${styles.downloadCV}`} href={Curriculo} download='Guilherme_Almeida_CV.pdf'>
                 Download CV <ion-icon name="download"></ion-icon>
              </a>
            </button>
          </section>
        </section>
        <section className="ss:max-1xl:w-full w-[40%] h-full flex items-center justify-center p-2">
          <p className="ss:max-md:text-lg text-white text-justify text-xl">
            Iniciei minha jornada na área da programação durante o Ensino Médio integrado ao Técnico em Informática. 
            Desde então, meu interesse pela área só cresceu, motivando-me a buscar continuamente novas tecnologias e a aprofundar o conhecimento que adquiri. 
            Após a conclusão do Ensino Médio, continuei meus estudos e desenvolvimento através da One Bit Code, 
            onde estou me especializando como desenvolvedor Full Stack e Python. 
            Atualmente, curso Desenvolvimento de Software Multiplataforma na Fatec-SJC, buscando uma formação ainda mais completa e abrangente.
          </p>
        </section>
      </main>
    </>
  )
}


// ss 320px
// sm	40rem (640px)	@media (width >= 40rem) { ... }
// md	48rem (768px)	@media (width >= 48rem) { ... }
// lg	64rem (1024px)	@media (width >= 64rem) { ... }
// xl	80rem (1280px)	@media (width >= 80rem) { ... }
// 2xl	96rem (1536px)	@media (width >= 96rem) { ... }