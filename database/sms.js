const twilio = require("twilio");
const accountSid = "AC278817d21ec27d3e7a1fe4f9faa9318f";
const authToken = "c508f29795d7150e6ba9e9b027dff039";

const cliente = new twilio(accountSid, authToken);

//Todo: Funcion para enviar SMS
const createSMS = () => {
  cliente.messages
    .create({
      body: "Su usuario ha sido creado correctamente",
      to: "+50378496636",
      from: "+12053869737",
    })
    .then((message) => console.log(message.sid));
};

exports.sendSMS = () => createSMS();
