
document.getElementById('formulario-cancion').addEventListener('submit', function(event) {
  event.preventDefault();
  const nombreDestinatario = this.nombre_destinatario.value;
  const nombreRemitente = this.nombre_remitente.value;
  const tipoRelacion = this.tipo_relacion.value;
  const detalle = this.detalle_historia.value;

  const prompt = `Escribe una letra de canción para ${nombreDestinatario}, desde ${nombreRemitente}, que exprese su relación (${tipoRelacion}) con énfasis en: ${detalle}`;

  navigator.clipboard.writeText(prompt).then(() => {
    alert("¡Listo! El texto fue copiado al portapapeles. Pégalo en ChatGPT para obtener tu canción personalizada.");
  });
});
