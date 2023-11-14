import VeilleArticle from "../components/article/VeilleArticle";
import Banner from "../components/header/Banner";

const Veille = () => {
  return (
    <>
      <header>
        <Banner
          title="Ma veille technologique"
          subtitle="Explorez ma veille technologique, un aperçu des dernières tendances et innovations qui influent sur mon approche professionnelle."
          backgroundImageUrl="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Contactez-moi"
          button1Link="/contact"
          button2Label="Lire plus"
        />
      </header>
      <main id="main">
        <div className="bg-[#000302]">
          <div className="container mx-auto py-12 px-4 max-w-7xl">
            <div className="text-center pb-12">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-white">
                L'accessibilité numérique
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mt-2">
                Comment les nouvelles technologies peuvent-elles aider les
                personnes handicapées au quotidien?
              </p>
            </div>
            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:max-w-full">
              <VeilleArticle />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Veille;
