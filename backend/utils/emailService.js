const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send notification email to admin
const sendNotificationEmail = async (contactData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${contactData.subject || 'No Subject'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Subject:</strong> ${contactData.subject || 'No Subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message}</p>
        <hr>
        <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
        <p><small>IP Address: ${contactData.ipAddress}</small></p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Notification email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending notification email:', error);
    return false;
  }
};

// Send confirmation email to user
const sendConfirmationEmail = async (contactData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: contactData.email,
      subject: 'Thank you for your message - Saif-Ur Rahman',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${contactData.name},</p>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${contactData.message}</p>
        <hr>
        <p>Best regards,<br>Saif-Ur Rahman</p>
        <p><small>This is an automated response. Please don't reply to this email.</small></p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
};

module.exports = {
  sendNotificationEmail,
  sendConfirmationEmail
}; 