const nodemailer = require('nodemailer');
const config = require('config');

async function sendEmail({ from, to, subject, html,attachments }) {
    const transporter = nodemailer.createTransport(config.smtpOptions);
    await transporter.sendMail({ from, to, subject, html,attachments })
   
}
module.exports = sendEmail;