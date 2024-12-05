"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onMessageCreated = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();
// Create a nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'brennan.reamer@gmail.com',
        pass: functions.config().email.pass
    }
});
// Function to send email when a new message is created
exports.onMessageCreated = functions.firestore
    .document('messages/{messageId}')
    .onCreate(async (snap) => {
    const message = snap.data();
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
    }
    catch (error) {
        console.error('Error sending email notification:', error);
    }
});
//# sourceMappingURL=index.js.map