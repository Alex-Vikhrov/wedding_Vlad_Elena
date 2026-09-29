import express from 'express';
import bodyParser from 'body-parser';
import sendMail from './src/utils/sendMail';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/send-mail', async (req, res) => {
  try {
    await sendMail(req.body);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Error sending email');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
