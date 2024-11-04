import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

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

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.json({ message: "Your details have been sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send details" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
