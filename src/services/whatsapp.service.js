import client from "../config/whatsapp.js";

async function getNumberId(params) {
  const numberId = await client.getNumberId(params);

  if (!numberId) {
    throw new Error("Número não encontrado: ${params}");
  }

  return numberId._serialized;
}

export async function sendMessageToNumber(targetNumber, message) {
  const serializedIdNumber = await getNumberId(targetNumber);

  await client.sendMessage(serializedIdNumber, message);
}
