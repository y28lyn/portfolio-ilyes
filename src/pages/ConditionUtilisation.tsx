const ConditionUtilisation = () => {
  return (
    <>
      <div className="bg-[#000302] text-white pb-10 pt-20 px-10 md:p-28">
        <h1 className="text-3xl font-bold">Conditions d'utilisation</h1>
        <p className="text-sm">
          <strong>Date de la Dernière Mise à Jour :</strong> 12/12/2023
        </p>

        <section className="mt-6">
          <h2 className="text-xl font-bold">
            Utilisation de Composants de Tailbits
          </h2>
          <p>
            Certaines parties de ce site web utilisent des composants de l'UI
            kit "Celebration" créés par Tailbits. Ces composants sont utilisés
            conformément à la
            <a
              href="https://www.tailbits.com/legal/licensing-agreement"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1 hover:text-gray-200"
            >
              licence applicable de Tailbits
            </a>
            .
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Permission d'utilisation</h2>
          <p>
            En vertu de la licence Creative Commons Attribution 4.0
            International Public License, vous êtes autorisé(e) à :
          </p>
          <ul className="list-disc ml-8">
            <li>
              Reproduire et partager le Matériel sous licence, en tout ou en
              partie.
            </li>
            <li>Produire, reproduire et partager du Matériel Adapté.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Clause de non-responsabilité</h2>
          <p>
            Sauf indication contraire de Tailbits, le Matériel sous licence est
            fourni tel quel, sans aucune garantie expresse ou implicite.
            Tailbits décline toute responsabilité pour tout dommage résultant de
            l'utilisation du Matériel sous licence.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Pour plus d'informations</h2>
          <p>
            Pour plus d'informations rendez-vous sur
            <a
              href="https://www.tailbits.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1 hover:text-gray-200"
            >
              le site officiel de Tailbits
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default ConditionUtilisation;
