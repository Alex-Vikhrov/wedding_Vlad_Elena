import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Загружаем переменные окружения из .env файла
dotenv.config();

async function sendEmail(to, subject, text) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.MAIL_USER,
    to: to,
    subject: subject,
    text: text,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export default sendEmail;