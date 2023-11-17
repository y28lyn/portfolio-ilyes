import TimelineArticle from "../components/article/TimelineArticle";
import Banner from "../components/header/Banner";

const Parcours = () => {
  return (
    <>
      <header>
        <Banner
          title="Mon parcours scolaire"
          subtitle="Mon cheminement académique, source de passion et de connaissances approfondies."
          backgroundImageUrl="https://images.unsplash.com/20/cambridge.JPG?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Mes expériences"
          button1Link="/experience"
          button2Label="Lire plus"
        />
      </header>
      <main id="main">
        <TimelineArticle />
      </main>
    </>
  );
};

export default Parcours;
