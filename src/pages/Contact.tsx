import emailjs from "emailjs-com";
import { useState, ChangeEvent, FormEvent } from "react";
import Banner from "../components/header/Banner";

interface Errors {
  [key: string]: string;
}

const validatePhoneNumber = (phoneNumber: string): boolean => {
  const phoneRegex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
  return phoneRegex.test(phoneNumber);
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const tempErrors: Errors = {};
    tempErrors.name = formData.name ? "" : "Ce champ est requis.";
    tempErrors.email = /^\S+@\S+\.\S+$/.test(formData.email)
      ? ""
      : "Adresse e-mail non valide.";
    tempErrors.phone = formData.phone
      ? validatePhoneNumber(formData.phone)
        ? ""
        : "Numéro de téléphone non valide."
      : "Ce champ est requis.";
    tempErrors.message = formData.message ? "" : "Ce champ est requis.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).every((key) => !tempErrors[key]);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [feedback, setFeedback] = useState({ message: "", error: false });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .send(
        "service_rsxawjs",
        "template_7sfujlu",
        formData,
        "heoG0uyUhCZXKQxlf",
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setFeedback({
            message: "Votre message a été envoyé avec succès!",
            error: false,
          });
        },
        (error) => {
          console.log(error.text);
          setFeedback({
            message: "Une erreur s'est produite lors de l'envoi de l'e-mail.",
            error: true,
          });
        },
      );
  };

  return (
    <>
      <header>
        <Banner
          title="Contact"
          subtitle="N'hésitez pas à prendre contact avec moi pour toute question, suggestion ou opportunité de collaboration qui pourrait se présenter."
          backgroundImageUrl="https://images.unsplash.com/photo-1566125882500-87e10f726cdc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Retour à l'accueil"
          button1Link="/"
          button2Label="Lire plus"
        />
      </header>

      <main id="main" className="bg-white dark:bg-[#000302]">
        <section className="relative z-10 px-10 md:px-20 py-6 flex items-center justify-center">
          <div className="container">
            <div className="flex flex-wrap lg:justify-between -mx-4">
              <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                <div className="max-w-[570px]">
                  <span className="block mb-4 text-base text-primary font-semibold text-blue-400 dark:text-slate-500">
                    Contactez-moi
                  </span>
                  <h2 className="text-black dark:text-white mb-6 uppercase font-bold text-xl md:text-3xl">
                    N'hésitez pas à me faire parvenir un message !
                  </h2>
                  <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-9">
                    En cas de question, de remarque ou de désir de
                    collaboration, n'hésitez pas à me contacter. Je suis
                    impatient de discuter avec vous. Utilisez le formulaire
                    ci-dessous ou les coordonnées fournies pour entrer en
                    contact. Merci et à bientôt !
                  </p>
                  <div className="flex flex-row gap-5">
                    <a
                      href="mailto:i.beirade@gmail.com"
                      className="text-base leading-relaxed mb-9 transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                    >
                      ibeirade.pro@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-5/12">
                <div className="relative rounded border-[1px] border-gray-200 p-6 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#101314] dark:bg-slate-800 dark:text-white dark:shadow-none">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Votre nom et prénom"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Votre e-mail"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                      )}
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Votre numéro de téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                      />
                      {errors.phone && (
                        <p className="text-red-500">{errors.phone}</p>
                      )}
                    </div>
                    <div className="mb-6">
                      <textarea
                        placeholder="Votre message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500">{errors.message}</p>
                      )}
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full text-white bg-blue-300 dark:bg-slate-600 hover:bg-blue-400 dark:hover:bg-slate-700 rounded p-3 transition"
                      >
                        Envoyer
                      </button>
                    </div>
                    {feedback.message && (
                      <p
                        className={`text-sm mt-3 ${
                          feedback.error ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {feedback.message}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
