import Banner from "../components/header/Banner";

const Certification = () => {
  return (
    <>
      <header>
        <Banner
          title="Mes certifications"
          subtitle="Explorez mes accréditations, des certifications qui attestent de ma compétence et de mon engagement dans l'informatique."
          backgroundImageUrl="https://images.unsplash.com/photo-1532153354457-5fbe1a3bb0b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Ma veille"
          button1Link="/veille"
          button2Label="Lire plus"
        />
      </header>
      <main id="main"></main>
    </>
  );
};

export default Certification;
