import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.post('/contact', async (req, res) => {
  const { name, email, project, message } = req.body;

  console.log('Received contact data:', { name, email, project, message });

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'e0224030@sriher.edu.in',
        pass: 'ibyg mqiu bunl ulij',
      }
    });

    // (1) Send email to the company
    await transporter.sendMail({
      from: 'e0224030@sriher.edu.in',
      to: 'e0224030@sriher.edu.in',
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Project: ${project}
Message: ${message}
      `
    });

    // (2) Send automatic reply to the user
    await transporter.sendMail({
      from: 'e0224030@sriher.edu.in',
      to: email,
      subject: `Thanks for contacting NeoShaan Technologies!`,
      text: `
Hi ${name},

Thank you for reaching out to us!

We have received your message:
---------------------------------------
Project: ${project}
Message: ${message}
---------------------------------------

We’ll get back to you as soon as possible.

Best regards,  
NeoShaan Technologies
      `
    });

    return res.json({
      success: true,
      message: 'Your message has been sent successfully!',
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send your message. Please try again later.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
