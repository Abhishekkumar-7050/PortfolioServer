const cloudinary = require("cloudinary").v2;
const Clint = require("../models/client");
const nodemailer = require("nodemailer");

const download = async (req, res) => {
  try {
    const pdfUrl = cloudinary.url("abhishek_resume__1_m1b6ak", {
      secure: true,
    });
    // console.log("image url", pdfUrl);

    return res.send({ pdfUrl });
  } catch (error) {
    // console.error("Error downloading PDF:", error);
    res.status(500).send("Error downloading PDF");
  }
};

const saveClient = async (req, res) => {
  try {
    const clientData = req.body;
    const newClient = new Clint(clientData);
    // const respons = await newClient.save();
    console.log("save sucsessfully");

   
    

    return res.status(200).send("ok");
  } catch (error) {
    // console.log("client nat saved error", error);
    return Promise.reject.error;
  }
};



const sendEmail = async (req, res)=>{
try {
  const clientData = req.body;
  let transporter =   nodemailer.createTransport({
    host: `smtp.gmail.com`,
    auth: {
      user: "abhimm113@gmail.com",
      // pass: `wwhx oaxw nkfm jazs`,
      pass: `keov fmku euek fgfv
      `,
    },
  });
  // <h1> clientData.name , clientData.number, clientData.email,clientData.subject</h1>
  let info = await transporter.sendMail({
    from: `From Abhishek `,
    to: "rahulyadav4191465@gmail.com, abhishekkumar0001dhkp@gmail.com",
    subject: clientData.subject,
    html: `Name:  
    ${clientData.name} <br>,Number :
     ${clientData.mobile}<br> , Message:
      ${clientData.message}<br> , Email:
       ${clientData.email} `
  
  });
  // console.log("INFO", info);
  res.send({info});

} catch (error) {
  console.log(" error from email", error);
}
}

module.exports = {
  download,
  saveClient,
  sendEmail
};
