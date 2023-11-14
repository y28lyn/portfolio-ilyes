import VeilleArticle from "../components/article/VeilleArticle";
import Banner from "../components/header/Banner";

const Veille = () => {
  const articlesData = [
    {
      source: "Playstation",
      date: "12 Octobre, 2023",
      author: "SID SHUMAN | SENIOR DIRECTOR, SIE CONTENT COMMUNICATIONS",
      title: "Contrôleur Access pour la PS5",
      desc: "La manette Access pour la PS5 sortira le 6 décembre 2023 et permettra aux joueurs en situation de handicap de jouer plus confortablement et plus longtemps...",
      imgUrl:
        "https://blog.playstation.com/tachyon/2023/10/95664514e9fff8f3455fc015bbab08ef0e101523-scaled.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5",
      linkUrl:
        "https://blog.playstation.com/2023/10/12/access-controller-for-ps5-interview-how-the-highly-customizable-kit-was-created/",
    },
    {
      source: "Hacavie",
      date: "13 Novembre, 2023",
      author: "Yann",
      title: "WYES, des lunettes parlantes",
      desc: "WYES est en réalité une paire de lunette couplée avec un module de connexion. Elle est destinée aux personnes atteintes d'handicap afin de communiquer via les yeux...",
      imgUrl:
        "https://static.wixstatic.com/media/0be6df_b02c0ea8dc5446a78e060d40e83beb32~mv2.jpg/v1/crop/x_0,y_0,w_3584,h_1888/fill/w_725,h_381,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/10-28.jpg",
      linkUrl:
        "https://hacavie.fr/aides-techniques/articles/wyes-des-lunettes-qui-font-parler/",
    },
    {
      source: "Décembre",
      date: "1 Décembre, 2023",
      author: "BEIRADE Ilyes",
      title: "Article de décembre",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo quis voluptatibus cumque incidunt quia necessitatibus placeat vero, quas sunt, nihil rem ipsum, suscipit animi...",
      imgUrl:
        "https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      linkUrl: "#",
    },
  ];

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
              {articlesData.map((article, index) => (
                <VeilleArticle
                  key={index}
                  source={article.source}
                  date={article.date}
                  author={article.author}
                  title={article.title}
                  desc={article.desc}
                  imgUrl={article.imgUrl}
                  linkUrl={article.linkUrl}
                  isEven={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Veille;
