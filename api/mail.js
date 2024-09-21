export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body; // Los datos JSON enviados desde el front
      console.log(data); // Aquí podrías hacer cualquier procesamiento, como enviar un correo

      // Ejemplo de respuesta exitosa
      res.status(200).json({ message: "Correo enviado con éxito", data });
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al procesar la solicitud" });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" }); // Solo acepta POST
  }
}