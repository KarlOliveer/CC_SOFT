import emailjs from "@emailjs/browser";

// Initialize EmailJS with your user ID
export const initEmailJS = () => {
  emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY", // Substitua pelo seu public key real
    // Opcional, mas recomendado para evitar limitações de CORS
    blockHeadless: false,
    limitRate: {
      // Opcional: limitar taxa de envios
      id: "mcm_systems",
      throttle: 10000, // 10 segundos entre envios
    },
  });
};

// Função para enviar e-mail usando EmailJS
export const sendEmailWithEmailJS = async (templateParams: any) => {
  try {
    const response = await emailjs.send(
      "service_mcm", // ID do serviço no EmailJS
      "template_mcm", // ID do template no EmailJS
      templateParams,
    );

    return response;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    throw error;
  }
};
