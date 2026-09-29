import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'mail',
  auth: {
    user: 'wedding.2025@mail.ru',
    pass: 'page12345W',
  },
});

export default async function sendMail(data) {
  const mailOptions = {
    from: 'wedding.2025@mail.ru',
    to: 'vih_64@mail.ru',
    subject: 'Анкета гостя',
    text: `
      Имя: ${data.firstName}
      Фамилия: ${data.lastName}
      Присутствие: ${data.attendance}
      Компаньоны: ${data.companions}
      Дети: ${data.children}
      Диетические особенности: ${data.dietary}
    `,
  };

  return transporter.sendMail(mailOptions);
}