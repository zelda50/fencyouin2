import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure the Nodemailer transporter using Outlook's SMTP
    const transporter = nodemailer.createTransport({
      service: 'Outlook365', // You can also use 'hotmail', 'gmail', 'yahoo', etc.
      auth: {
        user: process.env.OUTLOOK_USER,
        pass: process.env.OUTLOOK_PASS,
      },
    });

    // Set up email data
    const mailOptions = {
      from: email, // Sender email (from the form)
      to: 'your-outlook-email@outlook.com', // Your email to receive the message
      subject: `New contact form submission from ${name}`, // Subject line
      text: message, // Email content (message body)
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
