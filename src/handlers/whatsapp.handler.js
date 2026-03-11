import client from "../config/whatsapp.js";
import qrcode from "qrcode-terminal";
import { reminder } from "../services/reminder.service.js";

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("whatsApp foi conectado.");
  reminder();
});
