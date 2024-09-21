const RESEND_API_KEY = 're_WWNiDvWM_2na2VywXLFdtpucNp2kfTAKb';

export async function POST(req) {
  const data = req.json()

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Developercode <joruiz@developercode.dev>',
      to: ['joruiz@developercode.dev'],
      replyTo: `${data.email}`,
      subject: 'CONTACTO WEB DEVELOPERCODE',
      text: `
        Nombre: ${data.name}
        Correo: ${data.email}
        Mensaje: ${data.message}
      `,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <p style="font-size: 16px;"><strong>Nombre:</strong> ${data.name}</p>
            <p style="font-size: 16px;"><strong>Correo:</strong> ${data.email}</p>
            <p style="font-size: 16px;"><strong>Mensaje:</strong> ${data.message}</p>
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
    return Response.json(data);
  }
}