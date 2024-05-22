const nodemailer = require("nodemailer");




  const transporter = nodemailer.createTransport({
  service: 'gamil',
  port: 587,
  secure: false,
  auth: {
    user: 'abhishekkumar0001dhkp@gmail.com',
    pass: 'wwhx oaxw nkfm jazs'
  }
});

var mailOptions = {
  from: 'abhishekkumar0001dhkp@gmail.com',
  to: 'abhishekofficial7050@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

     transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("eror is ", error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
module.exports={
    
}