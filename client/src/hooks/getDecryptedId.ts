import CryptoJS from "crypto-js";

export const getDecryptedId = (cipherText: string): string => {
  const secretKey = process.env.CRYPTO_SECRET_KEY;
  const decryptedId = CryptoJS.AES.decrypt(cipherText, secretKey);
  return decryptedId.toString(CryptoJS.enc.Utf8);
};
