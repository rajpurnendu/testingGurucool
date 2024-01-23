import CryptoJS from "crypto-js";

const my_secret_key="my-secret-key@1709";
export const encryptData=(inputString:string)=>encodeURIComponent(CryptoJS.AES.encrypt(
    JSON.stringify(inputString),
    my_secret_key
  ).toString());

export const decryptedData=(inputString:string)=>JSON.parse(CryptoJS.AES.decrypt(decodeURIComponent(inputString), my_secret_key).toString(CryptoJS.enc.Utf8));


