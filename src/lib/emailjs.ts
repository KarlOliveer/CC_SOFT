import emailjs from "@emailjs/browser";

// Initialize EmailJS with your user ID
export const initEmailJS = () => {
  emailjs.init({
    publicKey: "no3mGHyc8Vz3HOMct", // Public key do EmailJS
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
    // Adicionar logs para debug
    console.log("Enviando e-mail com os seguintes parâmetros:", templateParams);

    // Usar IDs de serviço e template reais
    // Você precisa criar estes no painel do EmailJS
    const response = await emailjs.send(
      "service_4ztpvxp", // ID do serviço no EmailJS
      "template_ivxznj", // ID do template no EmailJS
      templateParams,
    );

    console.log("Resposta do EmailJS:", response);
    return response;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    throw error;
  }
};
