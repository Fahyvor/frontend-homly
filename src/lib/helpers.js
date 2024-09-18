import { SHA256 as sha256 } from "crypto-js";
import { cookies } from "next/headers";

export const hashPassword = (string) => sha256(string).toString();

export const setCookie = (data) => {
  if (data) {
    cookies().set({
      name: process.env.COOKIE_NAME,
      value: data.id,
    });
  }
};
