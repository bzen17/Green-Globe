const errorHandlerModule = require("../../helpers/error");
const errorHandler = errorHandlerModule();
const config = require("../../config/config");

const submitContact = async (req, res) => {
    const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: email,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  config.emailClient.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });

}

module.exports = {
    submitContact
};
