const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.USERNAME_SEND_EMAIL, // generated ethereal user
    pass: process.env.EMAIL_SEND_EMAIL // generated ethereal password
  }
});

// send mail with defined transport object
const sendWelcomeEmail = (email, name) => { transporter.sendMail({
  from: 'faschal25@gmail.com', 
  to: email,
  subject: 'Thanks for joining',
  text: `Welcome to the app, ${name}`
})};

const sendGoodbyeEmail = (email, name) => {
  transporter.sendMail({
    from: 'faschal25@gmail.com',
    to: email,
    subject: 'Sorry to see you go',
    text: `Good Bye, ${name}. we hope to see you again`
  })
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail 
}
