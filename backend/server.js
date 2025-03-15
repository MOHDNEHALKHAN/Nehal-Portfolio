import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const app = express();
app.use(cors({ origin: 'https://nehal-portfolio-alpha.vercel.app' }));  // http://localhost:5173 for local test
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

// Mailgun Configuration
const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send Thank You Email
    const emailResponse = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: "Mohd Nehal Khan <postmaster@nehalk482.me>",  
      to: email,
      subject: "Thank You for Contacting Me!",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out! I have received your message.</p>
        <p><strong><u>Your Details:</u></strong></p>
        <p><strong>Name :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong> ${message}</p>
        </br>
        <p>If any of this information is incorrect, please reply to this email.</p>
        <br/>
        <p>Best Regards,</p>
        <p><strong>Mohd Nehal Khan</strong></p>
      `
    });

    console.log("Email sent:", emailResponse);
    res.json({ message: "Your details have been sent!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send details" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));