import express from 'express';
import sgMail from '@sendgrid/mail';

const app = express();
const port = process.env.PORT || 3000;

// Set API Key
sgMail.setApiKey('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');
const message = 'Hello, this is a test email sent using SendGrid!';
// Define email options
const msg = {
  to: 'dreybrizuela12@gmail.com', // Recipient
  from: 'dreybrizuela12@gmail.com', // Verified sender
  subject: 'Test Email with SendGrid',
  text: message,
};

// Send email
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent successfully!');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
