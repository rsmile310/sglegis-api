const Mail = require('nodemailer');

const sender = {
    user: "talentedexpert0057@gmail.com",
    pass: 'rjadmstmdsiddl'
};

exports.send = (receiver, subject, message) => {
    var transporter = Mail.createTransport({
        service: 'gmail',
        auth: {
            ...sender
        }
    });
    
    var mailOptions = {
        from: sender.user,
        to: receiver,
        subject: subject,
        text: message
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    })
}