import type { NextApiRequest, NextApiResponse } from "next";
import { renderToString } from "react-dom/server";
import * as React from "react";
const nodemailer = require("nodemailer");
import { EmailTemplate } from "@/utils/email-template";
// require("dotenv").config();

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL_USER,
        pass: process.env.NODEMAILER_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: `${process.env.TORABOX_EMAIL}`,
      subject: "Novo projetinho!",
      html: renderToString(
        EmailTemplate({
          name: name,
          email: email,
          phone: phone,
          message: message,
        }) as React.ReactElement
      ),
    };

    try {
      await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error: any, info: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        });
      });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
