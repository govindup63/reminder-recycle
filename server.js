const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
    const { email, frequency } = req.body;

    console.log('Received request to send email to:', email, 'with frequency:', frequency);

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'projectreminder6323@gmail.com',  // Your Gmail address
            pass: 'tdsu lcfh fekn umje'                      // Your Gmail password
        }
    });

    // Email content
    const mailOptions = {
        from: 'projectreminder6323@gmail.com',
        to: email,
        subject: 'Recycling Reminder',
        text: `This is your ${frequency} recycling reminder.`
    };

    // Send email
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error('Error sending email reminder:', error);
            return res.status(500).json({ message: 'Error sending email reminder' });
        }
        console.log('Email reminder sent:', info.response);
        return res.status(200).json({ message: 'Email reminder sent successfully' });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
