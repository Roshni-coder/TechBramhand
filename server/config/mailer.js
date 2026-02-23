import dotenv from "dotenv";
dotenv.config(); // ✅ FORCE env load HERE

import nodemailer from "nodemailer";

console.log("SMTP_USER =", process.env.SMTP_USER);
console.log("SMTP_PASS =", process.env.SMTP_PASS ? "LOADED" : "MISSING");

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((err) => {
  if (err) {
    console.error("❌ SMTP Error:", err.message);
  } else {
    console.log("📧 SMTP Ready (Gmail)");
  }
});
