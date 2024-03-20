import VeilleArticle from "../components/article/VeilleArticle";
import Banner from "../components/header/Banner";

const Veille = () => {
  const articlesData = [
    {
      source: "Playstation",
      date: "12 Octobre, 2023",
      author: "SID SHUMAN",
      title: "Contrôleur Access PS5",
      desc: "La manette Access pour la PS5 sortira le 6 décembre 2023 et permettra aux joueurs en situation de handicap de jouer plus confortablement et plus longtemps.",
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
      desc: "WYES est en réalité une paire de lunette couplée avec un module de connexion pour les personnes atteintes d'handicap afin de communiquer via les yeux.",
      imgUrl:
        "https://static.wixstatic.com/media/0be6df_b02c0ea8dc5446a78e060d40e83beb32~mv2.jpg/v1/crop/x_0,y_0,w_3584,h_1888/fill/w_725,h_381,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/10-28.jpg",
      linkUrl:
        "https://hacavie.fr/aides-techniques/articles/wyes-des-lunettes-qui-font-parler/",
    },
    {
      source: "France Bleu Orléans",
      date: "4 Décembre, 2023",
      author: "François Guéroult",
      title: "Audiospot",
      desc: "La ville d'Orléans a adapté l'application numérique 'Audiospot' à son espace public : 48 sites répertoriés fournissant descriptions et informations pratiques, déclenchées par balise GPS.",
      imgUrl:
        "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkUrl:
        "https://www.francebleu.fr/infos/societe/orleans-lance-une-application-numerique-pour-rendre-la-ville-accessible-a-tous-1496977",
    },
    {
      source: "Arte",
      date: "6 Janvier, 2024",
      author: "F. Rihouay",
      title: "Contrôler son environnement par la pensée",
      desc: "À Toronto, une technologie inédite permet à de jeunes enfants lourdement handicapés de jouer, peindre ou encore d’écouter de la musique comme n’importe quel autre enfant.",
      imgUrl: "arte.png",
      linkUrl:
        "https://www.arte.tv/fr/videos/118414-000-A/handicap-controler-son-environnement-par-la-pensee/",
    },
    {
      source: "Vie publique",
      date: "7 février, 2024",
      author: "La Rédaction",
      title: "Qu'a changé la loi de 2005 ?",
      desc: "Depuis le 1er janvier 2024, les sites de l'internet public non accessibles aux personnes handicapées peuvent être sanctionnés à hauteur de 50 000 euros. Le but est que les démarches en ligne les plus courantes soient accessibles fin 2025.",
      imgUrl:
        "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkUrl:
        "https://www.vie-publique.fr/eclairage/19410-politique-du-handicap-qua-change-la-loi-de-2005",
    },
    {
      source: "01net",
      date: "8 Mars, 2024",
      author: "Mickaël Bazoge",
      title: "Accessibilité sur iOS 18",
      desc: "Apple a à cœur d’intégrer l’accessibilité dans ses systèmes d’exploitation, afin que tout le monde puisse utiliser ses appareils — y compris ceux qui ont un handicap, peu importe sa nature. iOS 18 devrait apporter des nouveautés dans ce domaine.",
      imgUrl:
        "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkUrl:
        "https://www.01net.com/actualites/de-nouvelles-fonctions-daccessibilite-dans-ios-18-et-macos-15.html",
    },
  ];

  return (
    <>
      <header>
        <Banner
          title="Ma veille technologique sur l'accessibilité numérique"
          subtitle="Comment les nouvelles technologies peuvent-elles aider les
          personnes en situation de handicap au quotidien?"
          backgroundImageUrl="https://images.unsplash.com/photo-1640693039636-a13ea2dd9139?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
