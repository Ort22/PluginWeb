function extraerURLsDeImagenes() {
    const imagenes = Array.from(document.querySelectorAll('img'));
    const urls = imagenes.map(img => img.src);
    enviarJSON({ urls });
  }
  
  function enviarJSON(data) {
    const url = 'https://cuddly-ebony-raincoat.glitch.me/api/imagenes'; // Reemplaza con la URL de tu servidor
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Éxito:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
  extraerURLsDeImagenes();  