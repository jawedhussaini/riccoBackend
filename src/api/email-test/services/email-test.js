module.exports = ({ strapi }) => ({
  emailService: async (ctx) => {
    try {
      console.log('Starting to send email...');
      const input = ctx.request.body.input;
      const emailTo = ctx.request.body.emailTo;
      
      const emailResponse = await strapi.plugins["email"].services.email.send({
        from: "jawed.hussaini2000@gmail.com",
        to: emailTo,
        subject: "Ricco Gym",
        html: `<p>${input}</p>`,
      });

   

      return {
        message: "Email sent!",
      };
    } catch (err) {
      console.error("Error sending email:", err);
      ctx.body = err;
    }
  },
});
