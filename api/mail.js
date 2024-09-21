const RESEND_API_KEY = 're_WWNiDvWM_2na2VywXLFdtpucNp2kfTAKb';

export async function POST(req, res) {
  const data = req.body

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Developercode <joruiz@developercode.dev>',
      to: ['joruiz@developercode.dev'],
      subject: 'CONTACTO WEB DEVELOPERCODE',
      html: `
      <p>${data.name}</p>
      <p>${data.mail}</p>
      <p>${data.message}</p>
    `,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return Response.json(data);
  }
}