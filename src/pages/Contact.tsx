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
      <main className="bg-[#000302] p-10 pt-20">
        <section className="bg-[#fbfcf8] text-black p-8 rounded-lg space-y-6 max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Prenez contact avec moi
          </h2>
          <p className="text-center text-lg">
            Je serrais toujours ravis de vous entendre !
          </p>
          <form
            action="#"
            ref={form}
            onSubmit={sendEmail}
            method="POST"
            className="space-y-4"
          >
            <div className="space-y-2">
              <div>
                <label className="text-base font-medium text-gray-900">
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
                <label className="text-base font-medium text-gray-900">
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
                <label className="text-base font-medium text-gray-900">
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

              <div>
                <button
                  type="submit"
                  className="mt-3 w-64 inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-white bg-[#000302] rounded transition ease-in-out delay-150 md:hover:scale-105 duration-300"
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
        </section>
      </main>
    </>
  );
};

export default Contact;
