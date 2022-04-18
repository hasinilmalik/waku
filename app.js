const qrcode = require("qrcode-terminal");

// const { Client } = require("whatsapp-web.js");
// const client = new Client();
const { Client, LocalAuth } = require("whatsapp-web.js");

const client1 = new Client({
  authStrategy: new LocalAuth({ clientId: "client-one" }),
});

const client2 = new Client({
  authStrategy: new LocalAuth({ clientId: "client-two" }),
});

// ON CLIENT 1
client1.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client1.on("ready", () => {
  console.log("Client is ready!");
});

client1.on("message", (message) => {
  if (message.body === "!ping") {
    message.reply("pong");
  }
});
client1.initialize();
