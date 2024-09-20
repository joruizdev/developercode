// api/sendEmail.js
import { Resend } from 'resend';

// Instancia de Resend con tu clave API (guarda la clave en las variables de entorno)
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Verifica el método HTTP
  if (req.method === 'POST') {
    try {
      // Extrae datos del cuerpo de la solicitud (como destinatario, asunto, cuerpo del mensaje)
      const { to, subject, text } = req.body;

      // Enviar correo con Resend
      const data = await resend.emails.send({
        from: 'joruiz@developercode.dev', // Asegúrate de que este correo esté validado en Resend
        to: to,
        subject: subject,
        text: text,
      });

      // Respuesta exitosa
      res.status(200).json({ message: 'Correo enviado correctamente', data });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ message: 'Error al enviar el correo', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
