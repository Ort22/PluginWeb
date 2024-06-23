# Image URL Extractor

Extrae los Urls de las imagenes de cualquier sitio web y los almacena en formato **.JSON**, después los envia a través de una petición de **Lambda AWS** para que finalmente **Lambda AWS** responda con los mismos Urls.

## **Para probar la Extensión:**

**a) Configura la función de Lambda AWS**
- Crea una nueva funión en Lambda y dale el nombre que desees, por ejemplo : 'url-extractor'.
- Asegurate que el lenguaje de la función sea **Python 3.12** y la arquitectura sea **x86_64**.
- Copia y pega el codigo de la Función de lambda que esta en este repositorio.

**1.- Google Chrome:**

- Ve a chrome://extensions/ en tu navegador.
- Activa el "Modo desarrollador".
- Haz clic en "Cargar descomprimida" y selecciona la carpeta de tu proyecto.

**2.- Mozilla Firefox:**
- Ve a about:debugging#/runtime/this-firefox.
- Haz clic en "Cargar complemento temporal" y selecciona el archivo manifest.json de tu proyecto.
