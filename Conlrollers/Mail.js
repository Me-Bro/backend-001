import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  //const {recipient,subject}=req.body;
  const transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "faustino44@ethereal.email",
      pass: "m4KHJU3eVZU45fnGu5",
    },
  });
  let inf = await transporter.sendMail({
    from: '"Roy Katiyar" <mercuryqueencr7@gmail.com>',
    to: "50priyansh.kumar@gmail.com",
    subject: "Conversation",
    text: "You have to come, man",
    attachments: [
      {
        filename: "Document.doc",
        path: "./sample1.docx",
      },
      {
        filename: "Document.doc",
        path: "./sample2.doc",
      },
    ],
  });
  console.log("message sent", inf.messageId);
  res.status(200).json(inf);
};
