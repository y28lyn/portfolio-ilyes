import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const userNameInput = form.current.user_name;
      const userEmailInput = form.current.user_email;
      const messageInput = form.current.message;

      if (!userNameInput.value.trim()) {
        setErrorMessage("Veuillez entrer votre nom et prénom.");
        return;
      }

      if (!validator.isEmail(userEmailInput.value)) {
        setErrorMessage("Veuillez entrer une adresse email valide.");
        return;
      }

      if (!messageInput.value.trim()) {
        setErrorMessage("Veuillez entrer votre message.");
        return;
      }

      try {
        const result = await emailjs.sendForm(
          "service_rsxawjs",
          "template_7sfujlu",
          form.current,
          "heoG0uyUhCZXKQxlf"
        );
        console.log(result.text);
        setIsSubmitted(true);
        form.current.reset();
        setErrorMessage(null);
      } catch (error) {
        console.error(error);
        setErrorMessage("Une erreur est survenue lors de l'envoi de l'e-mail.");
      }
    }
  };

  return (
    <>
      <main className="bg-[#000302] p-10 pt-20 flex flex-col md:flex-row justify-center gap-6">
        <div className="p-6 mr-2 bg-slate-800 rounded md:w-[60%] w-full">
          <h1 className="text-4xl sm:text-5xl text-white font-extrabold tracking-tight">
            Prenez contact avec moi
          </h1>
          <p className="text-normal text-lg sm:text-2xl font-medium text-gray-400 mt-2">
            Remplissez le formulaire pour entamer une conversation. Je serrais
            ravis de vous entendre !
          </p>

          <div className="flex items-center mt-8 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              Lyon 69000, France
            </div>
          </div>

          <div className="flex items-center mt-4 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              +33 7 78 90 74 44
            </div>
          </div>

          <div className="flex items-center mt-2 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              i.beirade@gmail.com
            </div>
          </div>

          <form
            action="#"
            ref={form}
            onSubmit={sendEmail}
            method="POST"
            className="space-y-4 mt-8"
          >
            <div className="space-y-2">
              <div>
                <label className="text-base font-medium text-gray-200">
                  Nom et prénom
                </label>
                <div className="mt-2.5 relative">
                  <input
                    type="text"
                    name="user_name"
                    id=""
                    placeholder="Entrez votre nom et prénom"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded focus:outline-none focus:ring-autoclean_blue focus:border-autoclean_blue caret-autoclean_blue"
                  />
                </div>
              </div>

              <div>
                <label className="text-base font-medium text-gray-200">
                  Email
                </label>
                <div className="mt-2.5 relative">
                  <input
                    type="text"
                    name="user_email"
                    id=""
                    placeholder="Entrez votre e-mail"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded focus:outline-none focus:ring-autoclean_blue focus:border-autoclean_blue caret-autoclean_blue"
                  />
                </div>
              </div>

              <div>
                <label className="text-base font-medium text-gray-200">
                  Message
                </label>
                <div className="mt-2.5 relative">
                  <textarea
                    name="message"
                    id=""
                    placeholder="Entrez votre message"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded resize-y focus:outline-none focus:ring-autoclean_blue focus:border-autoclean_blue caret-autoclean_blue"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="mt-3 w-64 inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-[#000302] bg-white rounded transition ease-in-out delay-150 md:hover:scale-105 duration-300"
                >
                  Envoyez votre message
                </button>
              </div>
            </div>
          </form>
          {isSubmitted && (
            <div className="mt-4 text-green-500">
              Votre e-mail a été envoyé avec succès !
            </div>
          )}
          {errorMessage && (
            <div className="mt-4 text-red-500">{errorMessage}</div>
          )}
        </div>
      </main>
    </>
  );
};

export default Contact;
