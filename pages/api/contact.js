import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Better to use environment variable

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    console.log('Attempting to send email with data:', { name, email, message });

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kent@globalpresources.com',  // Changed to your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    console.log('Email sent successfully:', data);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Error sending email',
      error: error.message 
    });
  }
}