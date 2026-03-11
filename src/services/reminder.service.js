import cron from "node-cron";
import "dotenv/config";
import { sendMessageToNumber } from "./whatsapp.service.js";
import { MESSAGES } from "../constants/messages.js";

export function reminder() {
  const targetNumber = process.env.PHONE_NUMBER;
  const timezone = process.env.TIMEZONE;

  cron.schedule(
    "* * * * *",
    async () => {
      console.log("running a task every minute");
      try {
        await sendMessageToNumber(targetNumber, MESSAGES.reminder);
        console.log("lembrete enviado!", targetNumber);
      } catch (err) {
        console.error("erro ao enviar lembrete:", err);
      }
    },
    { timezone },
  );
}
