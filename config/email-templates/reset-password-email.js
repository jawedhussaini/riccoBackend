module.exports = ({ url, code }) => {
      console.log('Generating email content:', { url, code });
  return {
    subject: 'Reset Your Password',
    text: `
    We heard that you lost your password. Sorry about that!
    But don’t worry! You can use the following link to reset your password:
    ${url}/reset-password?code=${code}
    Thanks.
    `,
    html: `
    <p>We heard that you lost your password. Sorry about that!</p>
    <p>But don’t worry! You can use the following link to reset your password:</p>
    <a href="${url}/reset-password?code=${code}" target="_blank" style="color: #007bff;">Reset Your Password</a>
    <p>Thanks.</p>
    `,
  };
};
