/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ContentCard from "./ContentCard";

export default function CardArticle() {
  const projects = [
    {
      title: "Inolib",
      desc: "Optimisation du site INOLIB post-lancement. Améliorations d'images et de style avec TailwindCSS. Collaboration cruciale pour renforcer la réputation et l'expérience utilisateur.",
      imgUrl: "/inolib.webp",
      link: "https://www.inolib.com/",
      linkUrl: "https://github.com/inolib/website",
      titleModal: "Inolib",
      contexte:
        "J'ai intégré le projet d'INOLIB après que le site web ait été lancé, dès mon deuxième jour. Ma contribution principale a été d'effectuer des améliorations sur l'implémentation des images et la rédaction du style en utilisant TailwindCSS. J'ai collaboré sur ce projet avec Matthieu GEORGE et Quentin FERRARI.",
      besoin:
        "La mission était d'une importance cruciale car le site web officiel de l'entreprise était déjà en ligne. Il était impératif de le rendre présentable, car il représente l'image de l'entreprise et est souvent la première impression pour les visiteurs. Cette approche a permis de créer une expérience utilisateur attrayante et cohérente, renforçant ainsi la réputation et la crédibilité de l'entreprise.",
      environnement:
        "Pendant ce projet, j'ai utilisé Visual Studio Code en tant qu'environnement de développement pour travailler avec ReactJS (QwikJS), Typescript, TailwindCSS et GIT. C'était une occasion d'apprendre et de me familiariser avec ces trois frameworks, car je ne les connaissais pas auparavant. Cette expérience m'a permis d'acquérir de nouvelles compétences et de me perfectionner dans ces technologies, ce qui a été bénéfique pour le succès du projet.",
      realisation:
        "La réalisation de ce projet a suivi plusieurs étapes cruciales. Tout d'abord, j'ai assimilé le code du site, compris sa structure et son fonctionnement, établissant ainsi une base solide pour aborder les défis techniques. Ensuite, j'ai consacré du temps à apprendre l'utilisation des outils disponibles, tels que les logiciels de développement et les plateformes de gestion de projet. Une fois ces bases établies, j'ai procédé à l'implémentation harmonieuse des images fournies par l'équipe design, en respectant scrupuleusement les indications artistiques. Simultanément, j'ai ajusté le style de certains composants du site, modifiant les couleurs, typographies et espacements pour assurer une cohérence visuelle optimale. En résumé, le projet a exigé un processus itératif impliquant l'assimilation du code, la maîtrise des outils, l'intégration des images, et la refonte stylistique des composants, aboutissant à un résultat final conforme aux exigences du projet.",
      bilan:
        "En conclusion, ma participation au projet INOLIB m'a offert une expérience enrichissante en améliorant l'implémentation des images et le style du site web à l'aide de TailwindCSS. J'ai acquis de nouvelles compétences en travaillant avec des frameworks tels que ReactJS (QwikJS), Typescript et GIT. Cette expérience collaborative a renforcé la réputation et la crédibilité de l'entreprise grâce à une expérience utilisateur attrayante.",
      competence:
        "Dans ce projet mettant en avant ma polyvalence et mon adaptation aux exigences techniques. La conception et la maintenance des solutions informatiques ont été au cœur de mon engagement, avec des ajustements visant à améliorer la performance du site. Le développement des solutions applicatives a été essentiel, impliquant la maîtrise des frameworks ReactJS (QwikJS) et Typescript pour des améliorations réussies. La gestion de configuration via GIT a favorisé une collaboration fluide, et les plateformes dédiées ont facilité la gestion méthodique du projet. L'intégration harmonieuse des images fournies par l'équipe design a été assurée, respectant les directives artistiques pour une cohérence visuelle optimale. La programmation avec Visual Studio Code et la maîtrise de langages comme ReactJS (QwikJS) et TailwindCSS ont apporté une dimension technique aboutie. Enfin, ma veille technologique constante a renforcé ma capacité à m'adapter rapidement aux évolutions, attestant ainsi de ma polyvalence au service du projet.",
      showGithub: true,
      showLink: true,
      category: "React",
    },
    {
      title: "InoTest",
      desc: "Projet majeur sur les tests d'accessibilité numérique et création d'une librairie de composants avec ReactJS, Typescript, TailwindCSS et GIT.",
      imgUrl: "inotest.webp",
      link: "https://inotest.vercel.app/",
      linkUrl: "https://github.com/Dindonix/InoTest",
      titleModal: "InoTest",
      contexte:
        "J'ai collaboré avec Matthieu GEORGE, l'un des deux développeurs full stack, sur ce projet passionnant. Notre objectif principal était de réaliser des tests d'accessibilité numérique sur différents composants de sites web destiné au grand public. De plus, nous avons travaillé sur la création d'une librairie de composants accessibles spécialement conçue pour les développeurs. Cette initiative visait à promouvoir l'accessibilité pour tous. Grâce à notre collaboration étroite, nous avons pu mettre en place des mesures concrètes pour rendre l'expérience en ligne plus inclusive. Notre projet représente une avancée significative dans le domaine de l'accessibilité numérique, offrant des solutions accessibles et conviviales pour tous.",
      besoin:
        "J'ai entrepris ce projet en tant que représentant de notre entreprise dans le but de répondre aux besoins croissants du marché en matière d'accessibilité numérique. En comprenant les attentes et les exigences des clients, nous avons identifié une lacune dans l'accessibilité des sites web et nous avons décidé de développer une solution innovante. Ce projet nous a permis de renforcer notre position sur le marché en offrant une librairie de composants accessibles dédiée aux développeurs. En proposant des outils de test d'accessibilité numérique et en mettant l'accent sur une expérience utilisateur inclusive, nous avons pu aider nos clients à se conformer aux normes d'accessibilité et à atteindre un public plus large. Ce projet a renforcé notre réputation d'entreprise axée sur l'innovation et l'engagement envers l'accessibilité numérique, ce qui a eu un impact positif sur notre croissance et notre image de marque",
      environnement:
        "Ce projet a été réalisé en utilisant les technologies de pointe telles que VS Code, ReactJS, Typescript et TailwindCSS ainsi que GIT. Cette combinaison de technologies modernes nous a permis de développer efficacement des composants accessibles et d'assurer une expérience utilisateur optimale lors de la création de la librairie et des tests d'accessibilité numérique.",
      realisation:
        "Ce projet s'est déroulé en plusieurs étapes méthodiques, débutant par la planification et la conceptualisation du site, où nous avons pris en compte les attentes des utilisateurs et élaboré un design sobre et original. Ensuite, nous avons développé le squelette du site, créé un tutoriel et mis en place quatre composants dédiés aux zones de test accessibles. Une librairie de composants accessibles a suivi, mettant l'accent sur la simplicité et l'efficacité pour les développeurs. Nous avons intégré les retours des utilisateurs en situation de handicap tout au long du processus, réalisant des tests approfondis pour assurer la fiabilité des composants et la facilité d'utilisation du tutoriel. Enfin, nous avons amélioré l'accessibilité du site lui-même, résolvant les problèmes conformément aux normes. En résumé, notre approche réfléchie et systématique a abouti à un outil complet permettant d'améliorer l'accessibilité des sites web, contribuant ainsi à créer une expérience inclusive pour tous les utilisateurs.",
      bilan:
        "Ce projet, réalisé en collaboration avec Matthieu GEORGE, a enrichi mon expérience dans le domaine de l'accessibilité numérique. En mettant en pratique nos compétences en développement, nous avons conçu des solutions concrètes centrées sur l'utilisateur, intégrant les retours des utilisateurs en situation de handicap pour garantir l'inclusivité de nos produits. Cette expérience a renforcé ma conviction en l'impact positif de la technologie sur le changement social en favorisant l'équité et l'égalité des opportunités. En envisageant une continuation de cette activité, nous pourrions étendre notre librairie de composants accessibles, collaborer avec d'autres acteurs du domaine, offrir des formations aux développeurs et promouvoir l'accessibilité numérique en tant qu'entreprise. En conclusion, ce projet a développé mes compétences techniques, souligné l'importance de l'inclusion, et en continuant cette activité, nous pourrions continuer à faire avancer l'accessibilité numérique et avoir un impact positif sur la société.",
      competence:
        "Diverses compétences ont été mises en œuvre. La planification et la conceptualisation du site web, ainsi que le développement de la librairie de composants accessibles, relèvent de la conception et de la maintenance de solutions informatiques. Le développement des composants de test pour l'accessibilité numérique, l'utilisation de technologies modernes comme VS Code, ReactJS, Typescript et TailwindCSS, ainsi que la gestion du code source avec GIT, illustrent le développement et l'adaptation de solutions applicatives, tout en assurant des tests approfondis pour garantir la fiabilité des composants. La mise en place de l'architecture et de la structure de base du site web, ainsi que l'intégration des évolutions des normes d'accessibilité, reflètent la gestion de configurations, les tests et la validation de solutions. Ces compétences ont été mobilisées de manière cohérente tout au long du projet, assurant la conception, le développement, les tests et le déploiement d'une solution complète et accessible pour les sites web destinés au grand public.",
      showGithub: true,
      showLink: true,
      category: "React",
    },
    {
      title: "Accessible Components",
      desc: "Accessible Components est une mini-librairie, en cours de création, que je développe en ReactJS / Typescript de composants accessibles aux personnes handicapées respectant les paternes W3C.",
      imgUrl: "accessiblecomponents.webp",
      link: "https://accessible-component.vercel.app/",
      linkUrl: "https://github.com/y28lyn/accessible-components",
      titleModal: "Accessible Components",
      contexte:
        "Pendant mon stage professionnel à INOLIB, j'ai eu le privilège de contribuer au projet 'Accessible Components' - une tentative naissante d'assembler une collection de composants accessibles en utilisant ReactJS et Typescript. Cette initiative a été alimentée par l'engagement d'adhérer aux normes d'accessibilité du W3C et de créer un répertoire d'éléments d'interface utilisateur qui sont inclusifs de par leur conception.",
      besoin:
        "L'objectif principal de la bibliothèque était de combler le fossé entre les interfaces utilisateur fonctionnelles et la conformité aux normes d'accessibilité. La communauté des développeurs est souvent confrontée aux défis de l'intégration de l'accessibilité dans leurs projets basés sur React. 'Accessible Components' vise à résoudre ce problème en fournissant des éléments d'interface utilisateur prêts à l'emploi et conformes.",
      environnement:
        "L'environnement de développement de la bibliothèque 'Accessible Components' était tout à fait moderne, tirant parti de technologies frontales puissantes telles que ReactJS et Typescript. Cette sélection de technologies a permis de garantir que les composants seraient non seulement conformes aux normes industrielles actuelles, mais aussi à l'épreuve du temps et facilement incorporables dans divers projets.",
      realisation:
        "Les principales réalisations dans le cadre du développement comprennent le respect rigoureux des lignes directrices du W3C pour garantir la conformité aux normes d'accessibilité mondiales. Ces composants sont créés avec ReactJS, ce qui facilite leur intégration dans l'écosystème React. L'implémentation de Typescript a amélioré l'expérience du développeur grâce à la sécurité des types et à la robustesse du codage. Les composants ont été développés dans une optique de personnalisation, ce qui permet aux développeurs d'adapter le design à l'esthétique spécifique de leurs projets. Enfin, les efforts se poursuivent pour élargir la bibliothèque avec une variété de composants accessibles qui répondent à un large éventail d'exigences en matière d'interface utilisateur.",
      bilan:
        "Ce projet de stage à INOLIB représente une contribution significative au monde du développement d'applications web, en ciblant spécifiquement l'aspect essentiel de l'accessibilité. La bibliothèque présente une fusion transparente de la fonctionnalité, de l'esthétique et de l'inclusivité.",
      competence:
        "En tirant parti de mon expertise en ReactJS et TypeScript, j'ai créé et intégré efficacement des composants web accessibles au cours de mon stage INOLIB. Ma maîtrise du contrôle de version à l'aide de GitHub a permis un développement itératif et une gestion collaborative du code. J'ai également mis en œuvre des tests unitaires pour garantir la fiabilité et la performance des composants. L'attention que j'ai portée aux principes d'accessibilité du web a permis à notre bibliothèque non seulement de se conformer aux normes du W3C, mais aussi d'établir une nouvelle référence en matière de conception inclusive dans le développement de logiciels.",
      showGithub: true,
      showLink: true,
      category: "React",
    },
    {
      title: "Autoclean",
      desc: "Le site web Autoclean est une vitrine en ligne destinée à présenter l'entreprise et ses services. Il a été développé en utilisant les technologies React.js, TypeScript et Tailwind CSS.",
      imgUrl: "autoclean.webp",
      link: "https://autoclean-lyon.fr/",
      linkUrl: "https://github.com/y28lyn/autoclean",
      titleModal: "Autoclean",
      contexte:
        "J'ai eu le privilège de créer bénévolement le site web Autoclean, mettant en lumière les services de cette entreprise dédiée à la propreté et à l'entretien automobile et textile. Mon engagement bénévole visait à offrir à Autoclean une présence en ligne professionnelle pour présenter leurs activités et faciliter le contact avec leurs clients potentiels.",
      besoin:
        "L'objectif principal de la création du site web Autoclean était de fournir à l'entreprise une vitrine en ligne claire et accessible. Le site devait informer les visiteurs sur les services proposés par Autoclean, présenter les tarifs de manière transparente et offrir un moyen facile de les contacter pour plus d'informations.",
      environnement:
        "Le site a été développé en utilisant les technologies React.js, TypeScript et Tailwind CSS, des choix qui ont permis de créer une interface utilisateur moderne et réactive. Ces technologies ont été sélectionnées pour offrir une expérience utilisateur optimale tout en permettant une personnalisation facile du contenu.",
      realisation:
        "La création du site web Autoclean a suivi une approche méthodique, visant à répondre précisément aux besoins de l'entreprise. Après une analyse approfondie des exigences d'Autoclean, nous avons opté pour les technologies React.js, TypeScript et Tailwind CSS pour assurer une interface moderne et réactive. Le développement des fonctionnalités a été progressif, avec une page d'accueil attrayante mettant en avant les services, une section tarifs transparente, et une page de contact avec formulaire. L'intégration des images a été effectuée pour refléter visuellement les services d'Autoclean, et le contenu a été adapté pour une communication claire et concise. Des tests approfondis ont été menés pour garantir la fonctionnalité sur diverses plateformes. Un guide d'installation a été créé pour simplifier le déploiement du site, avec des instructions claires pour personnaliser le contenu. La collaboration continue avec Autoclean a été essentielle, avec des réunions régulières pour ajuster le site en fonction de leurs retours. Cette approche itérative a assuré une satisfaction continue d'Autoclean, concrétisant ainsi une vitrine en ligne professionnelle répondant pleinement à leurs besoins.",
      bilan:
        "La création bénévole du site web Autoclean a abouti à une plateforme en ligne professionnelle, offrant une vitrine attractive pour l'entreprise. La collaboration étroite avec Autoclean a permis de répondre de manière spécifique à leurs besoins, renforçant ainsi leur présence numérique et facilitant l'accès à leurs services.",
      competence:
        "Ce projet a mobilisé des compétences variées, notamment le développement web avec React.js, TypeScript et Tailwind CSS. La capacité à personnaliser le site en fonction des besoins d'Autoclean a démontré des compétences en conception d'interface utilisateur et en adaptation de solutions applicatives. La collaboration étroite avec Autoclean a mis en avant des compétences de communication et de compréhension des besoins clients, contribuant ainsi à la création d'une solution personnalisée et fonctionnelle. En résumé, cette expérience bénévole a permis d'appliquer de manière concrète les compétences acquises dans le domaine du développement web.",
      showGithub: true,
      showLink: true,
      category: "React",
    },
    {
      title: "SGRC",
      desc: "La Table d'Hélène est une application PHP simplifiant la prise de commandes et la gestion des tables, plats, boissons, et menus pour le lycée Hélène Boucher.",
      imgUrl: "sgrc.webp",
      link: "https://brodet.fr/SGRC/",
      linkUrl: "https://github.com/y28lyn/sgrc",
      titleModal: "SGRC",
      contexte:
        "Au cours de ma deuxième année de BTS SIO, l'ensemble de ma classe a collaboré sur le projet La Table d'Hélène, une application PHP destinée à optimiser la gestion des commandes et des tables au lycée Hélène Boucher. Dans le cadre du projet SGRC, nous avons travaillé en équipe pour répondre aux besoins spécifiques de l'établissement, améliorant ainsi les processus de restauration.",
      besoin:
        "Le projet collectif visait à développer une application complète répondant aux exigences complexes du lycée Hélène Boucher en matière de gestion de commandes. L'objectif était de créer une solution unifiée pour coordonner les équipes de la cuisine à la caisse, tout en offrant une expérience utilisateur optimale.",
      environnement:
        "Le développement s'est déroulé dans un environnement collaboratif, avec l'utilisation de PHP pour la logique côté serveur et MySQL pour la base de données. Les tâches et responsabilités ont été réparties grâce à l'utilisation de Trello, un outil de gestion de projet en ligne. Les interfaces utilisateur ont été conçues pour refléter les différents rôles des utilisateurs, des administrateurs aux équipes de service, de cuisine, de bar et de caisse.",
      realisation:
        "L'équipe a adopté une approche méthodique en répartissant les tâches via Trello. Des réunions régulières ont été organisées pour discuter des avancées, résoudre les problèmes et assurer la cohérence globale du projet. Les interfaces dédiées à chaque équipe ont été développées en fonction de leurs besoins spécifiques, intégrant des fonctionnalités telles que la prise de commande, la gestion des tables et la transmission des commandes. Des interactions régulières avec le lycée ont eu lieu pour valider les choix de conception et s'assurer que l'application répondait aux besoins réels de l'établissement. Ces réunions ont permis de recueillir des retours précieux, assurant ainsi une adéquation optimale entre le projet et les attentes du lycée.",
      bilan:
        "La collaboration et la répartition des tâches ont conduit à la réalisation réussie de l'application La Table d'Hélène. L'utilisation de Trello a facilité la gestion du projet, tandis que les réunions régulières avec le lycée ont assuré une adaptation continue aux besoins réels. L'application a non seulement répondu aux attentes, mais elle a également contribué à améliorer de manière significative les processus de restauration au sein du lycée Hélène Boucher.",
      competence:
        "Ce projet collectif a mobilisé diverses compétences du référentiel BTS SIO. La répartition des tâches et la coordination ont illustré la capacité à concevoir et à maintenir des solutions informatiques. Le développement de l'application en PHP et la gestion de la base de données MySQL ont mis en œuvre des compétences en développement et adaptation de solutions applicatives. Les interactions avec le lycée ont démontré des compétences en communication et en gestion de projet. En résumé, ce projet a permis de mettre en pratique de manière intégrée les compétences du référentiel BTS SIO, renforçant ainsi notre compréhension globale du processus de développement logiciel en équipe.",
      showGithub: true,
      showLink: true,
      category: "PHP",
    },
    {
      title: "Renaissance Urbaine",
      desc: "Renaissance Urbaine est un projet PHP simulant des inscriptions aux activités d'une manifestation proposée par une association, comportant des profils de participants, de responsables et d'administrateurs.",
      imgUrl: "manif.webp",
      link: "https://manif-ilyes.000webhostapp.com/",
      linkUrl: "https://github.com/y28lyn/manif",
      titleModal: "Renaissance Urbaine",
      contexte:
        "En quête d'une gestion efficace des événements, j'ai développer une application conçue pour simplifier la tâche complexe de gestion des activités événementielles, lors de mon dernier trimestre de BTS SIO. Ce projet visait à fournir une solution robuste aux défis administratifs auxquels les associations sont confrontées lors d'événements.",
      besoin:
        "L'objectif du projet était d'aborder le processus complexe et chronophage de la gestion des activités événementielles. Il visait à fournir une plateforme web facilement navigable et riche en fonctionnalités pour l'enregistrement et la coordination de diverses activités lors d'événements.",
      environnement:
        "L'application a été développée en utilisant PHP pour la logique de base et MySQL pour les interactions avec la base de données. Des méthodologies agiles ont été adoptées pour un processus de développement structuré, avec des expériences administratives et d'utilisateurs finaux au premier plan des considérations de conception.",
      realisation:
        "Le développement de cette application a été centré sur la création d'une interface utilisateur intuitive qui répond aux différents rôles au sein d'un événement - administrateurs, participants et responsables d'activités. La plateforme qui en résulte offre un éventail de fonctionnalités pour gérer les activités, superviser les inscriptions, contrôler les créneaux horaires et rationaliser l'ensemble du processus d'un point de vue administratif. Les participants bénéficient d'une interface conviviale pour l'inscription aux activités, ce qui garantit une expérience fluide et sans tracas.",
      bilan:
        "Des projets comme 'Manif' témoignent de la capacité à construire une application complète qui réponde à des exigences détaillées et rigoureuses en matière de gestion d'événements, en accordant la priorité absolue à la facilité d'utilisation.",
      competence:
        "Le développement de 'Manif' est révélateur d'une myriade de compétences issues du programme du BTS SIO. Cela inclut la conception d'interfaces centrées sur l'utilisateur, le développement de backend avec PHP, la gestion complète de bases de données et l'autogestion d'un projet informatique complexe. Le déploiement de cette application démontre une compréhension approfondie et une application pratique des solutions de technologie de l'information dans un contexte professionnel.",
      showGithub: true,
      showLink: true,
      category: "PHP",
    },
    {
      title: "DCS",
      desc: "Ce projet PHP contient une étude de cas en Business Intelligence (BI). L'objectif est de créer une solution d'hébergement informatique et de réaliser une analyse des coûts et des métriques associées.",
      imgUrl: "dcs.webp",
      link: "http://dcs.infinityfreeapp.com/",
      linkUrl: "https://github.com/y28lyn/dcs",
      titleModal: "DCS",
      contexte:
        "Durant ma deuxième année de BTS SIO SLAM, nous avons entrepris un projet pour l'ICOF. Ce projet en PHP et TailwindCSS comprend une étude de cas de Business Intelligence (BI) pour l'infrastructure DSI d'un groupe important dans le secteur de la banque/finance/assurance, visant à forger une solution d'hébergement informatique rentable avec une approche analytique des coûts et des métriques associées.",
      besoin:
        "La mission principale de ce projet collectif était la création d'une plateforme analytique adaptée aux besoins complexes de l'infrastructure DSI du secteur banque/finance/assurance. L'objectif principal était de concevoir une application qui facilite l'analyse méticuleuse et le reporting de l'hébergement et des coûts associés, en fournissant des informations exploitables aux parties prenantes.",
      environnement:
        "Le projet s'est déroulé dans un cadre collaboratif, en s'appuyant sur PHP pour la logique côté serveur et sur le logiciel moderne TailwindCSS pour le style de l'interface utilisateur. L'équipe a divisé les tâches de manière efficace, en utilisant des outils comme Github pour la gestion de projet.",
      realisation:
        "En adoptant un flux de travail méthodique, les tâches ont été assignées et les progrès ont été contrôlés. Du travail en groupe a permis de discuter des progrès, de résoudre les problèmes et d'assurer la cohérence globale du projet. Les interfaces de l'application ont répondu aux exigences, en incorporant des fonctionnalités telles que la visualisation des données pour l'analyse des coûts et des volumes de produits. Les engagements avec l'ICOF ont été essentiels pour valider les choix de conception, confirmant l'alignement de l'application sur les exigences du monde réel.",
      bilan:
        "En conclusion, la collaboration a abouti à une application informée, capable de présenter la BI pour les solutions d'hébergement, ainsi que l'analyse des coûts et des métriques pour le secteur de la banque, de la finance et de l'assurance. La synergie entre les membres de l'équipe a permis d'unir les efforts pour atteindre les objectifs du projet et offrir une expérience utilisateur exceptionnelle.",
      competence:
        "L'effort du groupe a mis en évidence un large éventail de compétences décrites dans le programme d'études du BTS SIO. La répartition et la coordination des tâches ont mis en évidence notre capacité à concevoir et à maintenir des solutions d'information. Le développement de l'application PHP et la gestion d'une base de données MariaDB ont consolidé nos prouesses techniques. Les interactions tout au long du projet ont démontré nos compétences en matière de communication et de gestion de projet. Essentiellement, ce projet était une application complète des compétences du BTS SIO, amplifiant notre compréhension générale du travail d'équipe dans le développement de logiciels.",
      showGithub: true,
      showLink: true,
      category: "PHP",
    },
    {
      title: "Track It",
      desc: "Track It est une application qui permet aux utilisateurs de suivre leur prise de médicaments afin de ne pas oublier s'ils les ont pris ou non. Les utilisateurs peuvent enregistrer, modifier et supprimer les médicaments pris.",
      imgUrl: "https://jinoh.co/wp-content/uploads/2022/01/netMauiLogo.webp",
      link: "",
      linkUrl: "https://github.com/y28lyn/track-it",
      titleModal: "Track It",
      contexte: "",
      besoin: "",
      environnement: "",
      realisation: "",
      bilan: "",
      competence: "",
      showGithub: true,
      showLink: false,
      category: ".NET",
    },
    {
      title: "GLPI",
      desc: "GLPI simplifie la gestion informatique. Suivi des actifs, gestion des tickets, inventaires simples. Open-source, convivial, optimisez la productivité dès l'installation.",
      imgUrl: "glpi.webp",
      link: "#",
      linkUrl: "#",
      titleModal: "GLPI",
      contexte:
        "En tant qu'étudiant en première année de BTS SIO, j'ai entrepris l'installation de GLPI sur un système Linux Debian 11. Mon objectif principal était d'acquérir une compréhension approfondie du processus d'installation de ce logiciel de gestion de parc informatique au sein d'un environnement Debian.",
      besoin:
        "Ce projet individuel a été initié dans le but d'acquérir des compétences pratiques en matière d'installation et de configuration de solutions logicielles sur des systèmes d'exploitation Linux. Le choix de GLPI s'est justifié par son importance dans le domaine de la gestion de parc informatique, offrant une opportunité idéale pour renforcer mes connaissances en administration système.",
      environnement:
        "L'ensemble du processus a été réalisé sur un système Linux Debian 11. J'ai utilisé les outils propres à Debian pour la gestion des paquets et des dépendances. Cette démarche m'a permis de développer une compréhension approfondie de l'écosystème Debian, notamment en matière d'installation et de configuration de logiciels.",
      realisation:
        "L'installation de GLPI a débuté par la recherche et le téléchargement des paquets nécessaires. J'ai ensuite procédé à l'installation des dépendances, en m'assurant que le système était correctement configuré pour accueillir GLPI. La configuration du serveur web, l'ajustement des paramètres de base de données, et la création des permissions appropriées ont été des étapes cruciales du processus. J'ai veillé à suivre les meilleures pratiques de sécurité pour garantir la stabilité et la fiabilité de l'installation.",
      bilan:
        "Cette expérience en solo m'a permis de développer une expertise pratique en matière d'installation de logiciels sur un système Linux Debian 11. En réussissant à mettre en place GLPI de manière autonome, j'ai acquis une confiance accrue dans mes compétences en administration système. Ce projet a également renforcé ma compréhension des interactions entre les composants logiciels et matériels dans un environnement Linux.",
      competence:
        "Cette expérience a mobilisé plusieurs compétences. La recherche et le téléchargement des paquets, l'installation des dépendances, et la configuration du serveur web relèvent du développement et de l'adaptation de solutions applicatives. La gestion des permissions et la mise en place des bonnes pratiques de sécurité sont des aspects de la conception et de la maintenance de solutions informatiques. En résumé, ce projet individuel a permis de concrétiser les compétences du référentiel BTS SIO en matière d'administration système, avec un focus particulier sur l'installation de GLPI dans un environnement Debian 11.",
      showGithub: false,
      showLink: false,
      category: "Reseau",
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
  };

  const resetCategory = () => {
    setActiveCategory(null);
  };

  const filterProjectsByCategory = (project: any) => {
    if (!activeCategory) {
      return true;
    }
    return project.category === activeCategory;
  };

  const filteredProjects = projects.filter(filterProjectsByCategory);

  return (
    <div className="bg-white dark:bg-[#000302] p-10">
      <div className="w-fit mx-auto p-2 rounded grid md:grid-cols-5 grid-cols-3 gap-3 justify-center bg-blue-300 dark:bg-slate-800 text-[#000302] dark:text-white mb-8">
        <button
          onClick={resetCategory}
          className={`px-4 py-2 rounded bg-slate-200 hover:bg-slate-400 dark:bg-blue-500 dark:hover:bg-blue-600 duration-200 ease-in-out text-[#000302] dark:text-white font-bold ${
            activeCategory === null &&
            "bg-slate-400 hover:bg-slate-500 dark:bg-blue-600 dark:hover:bg-blue-700 duration-200 ease-in-out"
          }`}
        >
          Tous
        </button>
        <button
          onClick={() => handleCategoryChange("React")}
          className={`px-4 py-2 rounded bg-slate-200 hover:bg-slate-400 dark:bg-blue-500 dark:hover:bg-blue-600 duration-200 ease-in-out text-[#000302] dark:text-white font-bold ${
            activeCategory === "React" &&
            "bg-slate-400 hover:bg-slate-500 dark:bg-blue-600 dark:hover:bg-blue-700 duration-200 ease-in-out"
          }`}
        >
          ReactJS
        </button>
        <button
          onClick={() => handleCategoryChange("PHP")}
          className={`px-4 py-2 rounded bg-slate-200 hover:bg-slate-400 dark:bg-blue-500 dark:hover:bg-blue-600 duration-200 ease-in-out text-[#000302] dark:text-white font-bold ${
            activeCategory === "PHP" &&
            "bg-slate-400 hover:bg-slate-500 dark:bg-blue-600 dark:hover:bg-blue-700 duration-200 ease-in-out"
          }`}
        >
          PHP
        </button>
        <button
          onClick={() => handleCategoryChange(".NET")}
          className={`px-4 py-2 rounded bg-slate-200 hover:bg-slate-400 dark:bg-blue-500 dark:hover:bg-blue-600 duration-200 ease-in-out text-[#000302] dark:text-white font-bold ${
            activeCategory === ".NET" &&
            "bg-slate-400 hover:bg-slate-500 dark:bg-blue-600 dark:hover:bg-blue-700 duration-200 ease-in-out"
          }`}
        >
          .NET
        </button>
        <button
          onClick={() => handleCategoryChange("Reseau")}
          className={`px-4 py-2 rounded bg-slate-200 hover:bg-slate-400 dark:bg-blue-500 dark:hover:bg-blue-600 duration-200 ease-in-out text-[#000302] dark:text-white font-bold ${
            activeCategory === "Reseau" &&
            "bg-slate-400 hover:bg-slate-500 dark:bg-blue-600 dark:hover:bg-blue-700 duration-200 ease-in-out"
          }`}
        >
          Réseau
        </button>
      </div>

      <div className="grid max-w-md grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:max-w-full">
        {filteredProjects.map((project, index) => (
          <ContentCard
            key={index}
            title={project.title}
            desc={project.desc}
            imgUrl={project.imgUrl}
            link={project.link}
            linkUrl={project.linkUrl}
            titleModal={project.titleModal}
            cardColor={
              index % 2 === 0
                ? "bg-blue-500 dark:bg-gray-900"
                : "bg-blue-400 dark:bg-gray-800"
            }
            showGitHubButton={project.showGithub}
            showLinkButton={project.showLink}
            contexte={project.contexte}
            besoin={project.besoin}
            environnement={project.environnement}
            realisation={project.realisation}
            bilan={project.besoin}
            competence={project.competence}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
}
