import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

interface Message {
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

// Create a nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'brennan.reamer@gmail.com',
    pass: functions.config().email.pass
  }
});

// Function to send email when a new message is created
export const onMessageCreated = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async (snap) => {
    const message = snap.data() as Message;

    // Email content
    const mailOptions = {
      from: 'brennan.reamer@gmail.com',
      to: 'brennan.reamer@gmail.com',
      subject: `New Contact Form Message from ${message.name}`,
      html: `
        <h3>New message from your portfolio website</h3>
        <p><strong>From:</strong> ${message.name}</p>
        <p><strong>Email:</strong> ${message.email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.message}</p>
        <p><strong>Sent at:</strong> ${new Date(message.createdAt).toLocaleString()}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email notification sent successfully');
    } catch (error) {
      console.error('Error sending email notification:', error);
    }
  });
