// Email service for sending emails

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  username?: string;
  reset_link?: string;
}

// Email configuration
const emailConfig: EmailConfig = {
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "suporte.ccwork@outlook.pt",
    pass: "CCWork1991",
  },
};

import { sendEmailWithEmailJS } from "./emailjs";

/**
 * Send an email using the configured email service
 */
export const sendEmail = async (options: EmailOptions): Promise<boolean> => {
  try {
    // Use EmailJS para enviar e-mails reais
    const templateParams = {
      to_email: options.to,
      subject: options.subject,
      message: options.text || options.html,
      from_name: "MCM Systems",
      reply_to: emailConfig.auth.user,
      // Parâmetros para o template HTML
      username: options.username || "Usuário",
      reset_link: options.reset_link || "",
      email_subject: options.subject,
    };

    console.log("Enviando e-mail com sendEmail:", options.to);
    const response = await sendEmailWithEmailJS(templateParams);
    console.log(`Email sent successfully to ${options.to}`, response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

/**
 * Send a password reset email
 */
export const sendPasswordResetEmail = async (
  email: string,
  username: string,
  resetLink: string,
): Promise<boolean> => {
  const subject = "Recuperação de Senha - MCM Gestor de Projetos";

  // Não precisamos mais definir o HTML aqui, pois usamos o template do EmailJS

  // Não precisamos mais definir o texto aqui, pois usamos o template do EmailJS

  return sendEmail({
    to: email,
    subject,
    text: "Recuperação de senha",
    html: "<p>Recuperação de senha</p>",
    username,
    reset_link: resetLink,
  });
};
