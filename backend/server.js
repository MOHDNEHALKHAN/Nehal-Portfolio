import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors({ origin: 'https://nehal-portfolio-alpha.vercel.app' }));
app.use(express.json());


const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const Contact = mongoose.model('userdetail', contactSchema);

// Email Functioing to send an email to the user

const sendThankYouEmail = (email, name) => {
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
      }
  });

  const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Your Feedback!',
      html: `
          <h1>Thank You, ${name}!</h1>
          <p>We appreciate your feedback and will get back to you soon if needed.</p>
          <p>This is to inform you that your message was sent to Mohd Nehal Khan. If the details are incorrect, please reply to this email.</p>
          <p>Best regards,<br>Mohd Nehal Khan</p>
      `
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error('Error sending email:', error);
      } else {
          console.log('Email sent: ' + info.response);
      }
  });
};


app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();

     // Send Thank You Email
     sendThankYouEmail(email, name);
     
    res.json({ message: "Your details have been sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send details" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));