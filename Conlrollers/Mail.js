import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  //const {recipient,subject}=req.body;
  const transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "rosemary.hoeger@ethereal.email",
      pass: "7zcz5vz7nXQWswK2NM",
    },
  });
  let inf = await transporter.sendMail({
    from: '"Roy Katiyar" <mercuryqueencr7@gmail.com>',
    to: "50priyansh.kumar@gmail.com",
    subject: "Conversation",
    text: "You have to come, man",
  });
  console.log("message sent", inf.messageId);
  res.status(200).json(inf);
};
