import VeilleArticle from "../components/article/VeilleArticle";
import Banner from "../components/header/Banner";

const Veille = () => {
  const articlesData = [
    {
      source: "Playstation",
      date: "12 Octobre, 2023",
      author: "SID SHUMAN | SENIOR DIRECTOR",
      title: "Contrôleur Access PS5",
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
      desc: "WYES est en réalité une paire de lunette couplée avec un module de connexion pour les personnes atteintes d'handicap afin de communiquer via les yeux...",
      imgUrl:
        "https://static.wixstatic.com/media/0be6df_b02c0ea8dc5446a78e060d40e83beb32~mv2.jpg/v1/crop/x_0,y_0,w_3584,h_1888/fill/w_725,h_381,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/10-28.jpg",
      linkUrl:
        "https://hacavie.fr/aides-techniques/articles/wyes-des-lunettes-qui-font-parler/",
    },
    {
      source: "Décembre",
      date: "1 Décembre, 2023",
      author: "BEIRADE Ilyes",
      title: "Article de Décembre",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo quis voluptatibus cumque incidunt quia necessitatibus placeat vero...",
      imgUrl:
        "https://images.unsplash.com/photo-1699794369704-bfdaa57cd8df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
      linkUrl: "#",
    },
    {
      source: "Janvier",
      date: "1 Janvier, 2023",
      author: "BEIRADE Ilyes",
      title: "Article de Janvier",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo quis voluptatibus cumque incidunt quia necessitatibus placeat vero...",
      imgUrl:
        "https://images.unsplash.com/photo-1682687220208-22d7a2543e88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
      linkUrl: "#",
    },
    {
      source: "Février",
      date: "1 Février, 2023",
      author: "BEIRADE Ilyes",
      title: "Article de Février",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo quis voluptatibus cumque incidunt quia necessitatibus placeat vero...",
      imgUrl:
        "https://images.unsplash.com/photo-1699803895016-72cabdd79107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
      linkUrl: "#",
    },
    {
      source: "Mars",
      date: "1 Mars, 2023",
      author: "BEIRADE Ilyes",
      title: "Article de Mars",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo quis voluptatibus cumque incidunt quia necessitatibus placeat vero...",
      imgUrl:
        "https://images.unsplash.com/photo-1699918477547-bc6c99d639cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      linkUrl: "#",
    },
  ];

  return (
    <>
      <header>
        <Banner
          title="Ma veille technologique sur l'accessibilité numérique"
          subtitle="Comment les nouvelles technologies peuvent-elles aider les
          personnes handicapées au quotidien?"
          backgroundImageUrl="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Contactez-moi"
          button1Link="/contact"
          button2Label="Lire plus"
        />
      </header>
      <main id="main" className="bg-[#000302] p-10">
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
      </main>
    </>
  );
};

export default Veille;
