// pages/api/notify.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { visitorData } = req.body;

    try {
      const message = `New Visitor: 
        IP: ${visitorData.ip} 
        Location: ${visitorData.city}, ${visitorData.country}`;

      // Send the email via EmailJS
      const emailResponse = await emailjs.send(
        'service_09ef1h8',
        'template_oe1mo4m',
        { message },
        's_D846xK8FhLybK3L'
      );

      res.status(200).json({ message: 'Notification sent successfully' });
    } catch (error) {
      console.error('Error sending notification:', error);
      res.status(500).json({ error: 'Error sending notification' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
