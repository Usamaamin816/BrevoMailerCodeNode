//first we create smpt using google smtp then gets the "auth: { user: "usamaamin*****", pass: "ns******" } " 
then we used this in our transpoter function before that made sure that you have installed nodemailer in your project 
import * as nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: "587",
	auth: { user: "usamaamin*****", pass: "ns******" },
	secureConnection: false,
	tls: { rejectUnauthorized: false }
});
//now create an function in which we will pass id number of Mails template to get it from Brevo and in that function we will also pass data to use in the mails template then we can use it anywhere in the controller 

export const mailerOption = async (
	email,
	senderEmail,
	id,
	senderName,
	title,
	subject,
	templateId,
	token,
	userId,
	msg,
	streetName,
	code,
	time,
	address,
	ipAddress,
	pinId
) => {
	// const baseUrl = "https://v3.xoommaps.com";
	const baseUrl = "https://betax-78319.web.app";
	const receiverEmail = "xoommaps@mailinator.com";
	var Brevo = require("@getbrevo/brevo");
	var defaultClient = Brevo.ApiClient.instance;
	// Configure API key authorization: api-key
	var apiKey = defaultClient.authentications["api-key"];
	apiKey.apiKey =
		"******bvnbvnb";
	// Configure API key authorization: partner-key
	var partnerKey = defaultClient.authentications["partner-key"];
	partnerKey.apiKey =
		"*****ghgfh";
	try {
		// Optionally, if you want to send using Nodemailer, you can fetch the template content from Brevo and send it
		const templateResponse = await apiInstance.getSmtpTemplate(templateId);
		const emailContent = templateResponse.htmlContent
			.replace(/{{params.senderName}}/g, senderName)
			.replace(/{{params.code}}/g, code)
			.replace(/{{params.email}}/g, email)
			.replace(/{{params.senderEmail}}/g, senderEmail)
			.replace(/{{params.id}}/g, id)
			.replace(/{{params.title}}/g, title)
			.replace(/{{params.subject}}/g, subject)
			.replace(/{{params.baseUrl}}/g, baseUrl)
			.replace(/{{params.token}}/g, token)
			.replace(/{{params.userId}}/g, userId)
			.replace(/{{params.msg}}/g, msg)
			.replace(/{{params.streetName}}/g, streetName)
			.replace(/{{params.time}}/g, time)
			.replace(/{{params.address}}/g, address)
			.replace(/{{params.ipAddress}}/g, ipAddress)
			.replace(/{{params.pinId}}/g, pinId); // Assuming your template has an `htmlContent` field

		const mailOptions = {
			// from: senderEmail || "default_sender@example.com",
			from: "Xoommaps <noreply@xoommaps.com>",
			to: email || receiverEmail,
			subject: subject,
			html: emailContent

			// Add more replacements as needed
		};

		// Send the email using Nodemailer
		const info = await transporter.sendMail(mailOptions);
		console.log("Email sent successfully via Gmail: " + info.response);
	} catch (error) {
		console.error("Error sending email: ", error);
	}
};
