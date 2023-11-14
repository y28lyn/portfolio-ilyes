const ConditionUtilisation = () => {
  return (
    <>
      <div className="bg-[#000302] text-white pb-10 pt-20 px-10 md:p-28">
        <h1 className="text-3xl font-bold">Conditions d'utilisation</h1>
        <p className="text-sm">
          <strong>Date de la Dernière Mise à Jour :</strong> 19/10/2023
        </p>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Permission d'utilisation</h2>
          ...
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Clause de non-responsabilité</h2>
          <p>...</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">Pour plus d'informations</h2>
          <p>
            Pour plus d'informations sur ..., visitez
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-2"
            >
              le site officiel de ...
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default ConditionUtilisation;
