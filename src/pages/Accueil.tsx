import HomeArticle from "../components/article/HomeArticle";
import Banner from "../components/header/Banner";

const Accueil = () => {
  return (
    <>
      <header>
        <Banner
          title="BEIRADE Ilyes Test"
          subtitle="Étudiant en BTS SIO option SLAM"
          backgroundImageUrl="https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Mon parcours"
          button1Link="/parcours"
          button2Label="Lire plus"
        />
      </header>
      <main id="main">
        <HomeArticle />
      </main>
    </>
  );
};

export default Accueil;
