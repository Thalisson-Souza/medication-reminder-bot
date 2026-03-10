import express from "express";
import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const client = new Client();

client.once("ready", () => {
  console.log("cliente is ready");
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.initialize();

const app = express();

app.listen(3000, () => {
  console.log("server is running localhost:3000");
});
