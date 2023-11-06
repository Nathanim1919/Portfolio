const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();


// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Create a transport object for sending emails
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'nathanim2tadele@gmail.com',
        pass: '@nathanim1919' // Replace 'your_password' with your actual Gmail password
    }
});


// Define a route to handle form submissions
app.post('/send', (req, res) => {
    const {
        name,
        email,
        message
    } = req.body;

    // Create email data
    const mailOptions = {
        from: email,
        to: 'nathanim2tadele@gmail.com',
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending the email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

app.listen(5173, () => {
    console.log(`Server is running on port 5000`);
});