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

/**
 * Send an email using the configured email service
 *
 * In a real application, this would use a library like nodemailer.
 * For this demo, we'll simulate sending an email.
 */
export const sendEmail = async (options: EmailOptions): Promise<boolean> => {
  try {
    console.log(`Sending email to ${options.to}`);
    console.log(`Subject: ${options.subject}`);
    console.log(`Content: ${options.text || options.html}`);

    // In a real application with a backend, you would use:
    // const transporter = nodemailer.createTransport(emailConfig);
    // await transporter.sendMail({
    //   from: emailConfig.auth.user,
    //   to: options.to,
    //   subject: options.subject,
    //   text: options.text,
    //   html: options.html
    // });

    // For this demo, we'll simulate a successful email send
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

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Recuperação de Senha</h2>
      <p>Olá,</p>
      <p>Recebemos uma solicitação para redefinir a senha da sua conta.</p>
      <p>Para redefinir sua senha, clique no link abaixo:</p>
      <p>
        <a href="${resetLink}" style="display: inline-block; background-color: #0066cc; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
          Redefinir Senha
        </a>
      </p>
      <p>Se você não solicitou a redefinição de senha, ignore este e-mail.</p>
      <p>Atenciosamente,<br>Equipe MCM Gestor de Projetos</p>
    </div>
  `;

  const textContent = `
    Recuperação de Senha - MCM Gestor de Projetos
    
    Olá,
    
    Recebemos uma solicitação para redefinir a senha da sua conta.
    
    Para redefinir sua senha, acesse o link: ${resetLink}
    
    Se você não solicitou a redefinição de senha, ignore este e-mail.
    
    Atenciosamente,
    Equipe MCM Gestor de Projetos
  `;

  return sendEmail({
    to: email,
    subject,
    text: textContent,
    html: htmlContent,
  });
};
