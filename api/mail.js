const RESEND_API_KEY = 're_WWNiDvWM_2na2VywXLFdtpucNp2kfTAKb';

export default async function handler(req, res) {
  const {name, message, email} = req.body

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Developercode <joruiz@developercode.dev>',
      to: ['joruiz@developercode.dev'],
      replyTo: `${email}`,
      subject: 'CONTACTO WEB DEVELOPERCODE',
      text: `
        Nombre: ${name}
        Correo: ${email}
        Mensaje: ${message}
      `,
      html: `
        <html>
          <body style="font-family: Tahoma, Sans-Serif, Arial; color: #333;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
            <p><strong>Fecha de Envío:</strong> ${new Date().toLocaleString()}</p>
            <footer style="margin-top: 20px; font-size: 12px; color: #888;">
              <p>Este correo fue enviado desde Developercode</p>
              <p><a href="https://www.developercode.dev">https://www.developercode.dev</a></p>
            </footer>
          </body>
        </html>
      `
    }),
    
  });

  if (response.ok) {
    const data = await response.json();
    return res.json(data);
  }
}