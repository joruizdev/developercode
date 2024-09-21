import { Resend } from 'resend';
const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body

    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: 'Developercode <joruiz@developercode.dev>',
      to: ['joruiz@developercode.dev'],
      subject: 'CONTACTO WEB DEVELOPERCODE',
      html: `
        <p>${data.name}</p>
        <p>${data.mail}</p>
        <p>${data.message}</p>
      `,
    });

      // Ejemplo de respuesta exitosa
      res.status(200).json({ message: "Correo enviado con éxito", data })
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al procesar la solicitud" })
    }
  } else {
    res.status(405).json({ message: "Método no permitido" })
  }
}