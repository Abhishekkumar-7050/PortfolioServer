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
    const respons = await newClient.save();
    // console.log("save sucsessfully", respons);

    let transporter =  nodemailer.createTransport({
      host: `smtp.gmail.com`,
      auth: {
        user: "abhishekkumar0001dhkp@gmailcom",
        pass: `wwhx oaxw nkfm jazs`,
      },
    });

    let info = await transporter.sendMail({
      from: `CodeHelp - by Babbar`,
      to: "coolestex@gmail.com",
      subject: clientData.subject,
      html: `${clientData}`,
    });
    console.log("INFO", info,respons);

    return res.status(200).send("ok");
  } catch (error) {
    // console.log("client nat saved error", error);
    return Promise.reject.error;
  }
};

module.exports = {
  download,
  saveClient,
};
