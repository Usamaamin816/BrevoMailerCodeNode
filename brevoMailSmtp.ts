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
	const baseUrl = "https://v3.xoommaps.com";
	const receiverEmail = "xoommaps@mailinator.com";
	var Brevo = require("@getbrevo/brevo");
	var defaultClient = Brevo.ApiClient.instance;
	// Configure API key authorization: api-key
	var apiKey = defaultClient.authentications["api-key"];
	apiKey.apiKey =
		"****hgjhgjhg";
	// Configure API key authorization: partner-key
	var partnerKey = defaultClient.authentications["partner-key"];
	partnerKey.apiKey =
		"***jhkdsakjsd";
	const apiInstance = new Brevo.TransactionalEmailsApi();
	let sendSmtpEmail = new Brevo.SendSmtpEmail();
	sendSmtpEmail = {
		to: [
			{
				email: email || receiverEmail
			}
		],
		templateId: templateId,
		params: {
			email: email,
			senderEmail: senderEmail,
			id: id,
			senderName: senderName,
			title: title,
			subject: subject,
			baseUrl: baseUrl,
			token: token,
			userId: userId,
			msg: msg,
			streetName: streetName,
			code: code,
			time: time,
			address: address,
			ipAddress: ipAddress,
			pinId: pinId
		},
		subject: subject
	};
	apiInstance.sendTransacEmail(sendSmtpEmail).then(
		function(data) {
			console.log("API called successfully. Returned data: " + data);
		},
		function(error) {
			console.error(error);
		}
	);
};
