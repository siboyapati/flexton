var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'siva.msft@gmail.com',
        pass: 'tomtom123'
    }
});

var mailOptions = {
    from: 'siva.msft@gmail.com',
    to: 'siva.msft@gmail.com,hr@flextonlabs.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});