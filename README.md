# Image URL Extractor

Extrae los Urls de las imagenes de cualquier sitio web y los almacena en formato **.JSON**, después los envia a través de una petición de **Lambda AWS** para que finalmente **Lambda AWS** responda con los mismos Urls.

## **Para probar la Extensión:**

**a) Configura la función de Lambda AWS**
- Crea una nueva funión en Lambda y dale el nombre que desees, por ejemplo : 'url-extractor'.
- Asegurate que el lenguaje de la función sea **Python 3.12** y la arquitectura sea **x86_64**.
- Copia y pega el codigo de la Función de lambda que esta en este repositorio.

**b) Configura el API Gateway para la función de Lambda**
- En el **Diagrama de la Función** dar click en **Agregar Desencadenador**.
- Seleccionar **API Gateway** como origen, y luego selecciona **Crear una API nueva**.
- Selecciona **API de REST** y en seguridad selecciona **Abrir**.

**c) Habilita el Método POST**
- Entra en el API Gateway creado y selecciona el recurso que te aparece, por ejemplo: '/url-extractor'.
- Verás que hay un método **ANY**, seleccionalo y eliminalo.
- Da click en **Crear Método** y selecciona **POST** como tipo de método.
- Selecciona la opción **Función de Lambda** y habilita la **Integración de Proxy de Lambda**.
- Selecciona la región de tu función de Lambda y después selecciona la Función de Lambda que creaste.
- Da click en **Crear Método**, verás que ya te aparece el método **POST** dentro de tu recurso.

**d) Habilita CORS**
- Selecciona tu recurso '/url-extractor' y en el apartado de **Detalles del Recurso** da click en **Habilitar CORS**.
- En el apartado **Access-Control-Allow-Methods** habilita la opción **POST**.

***NOTA:** Asegurate de que en el apartado **Access-Control-Allow-Headers** esten los siguientes headers: **Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token***.

***NOTA:** Asegurate de que en el apartado **Access-Control-Allow-Origin** este con un '*'*.

- Da click en **Guardar** y se habilitará CORS.

***Nota:** Verás que se creo otro método **OPTIONS** eso quiere decir que **CORS** se habilitó correctamente.*

**e) Agrega los headers a la respuesta del Método POST**
- Selecciona el Método **POST** y en el diagrama de la ejecución del método da click en **Respuesta de Método**.

***NOTA:** Asegurate de que el método este vinculado a la función de Lambda, debe aparecer **Función de Lambda** del lado izquierdo del diagrama de ejecución del método*.

***NOTA:** Asegurate que la respuesta del método sea una respuesta **200***.

- Da click en **Editar** y en el apartado de **Nombre de Encabezado** agrega los encabezados faltantes.
  - **Access-Control-Allow-Methods**
  - **Access-Control-Allow-Origin**
- Por último da click en **Guardar**.   

## Para Subir la extensión (Plug-in) al Navegador

**1.- Google Chrome:**

- Ve a chrome://extensions/ en tu navegador.
- Activa el "Modo desarrollador".
- Haz clic en "Cargar descomprimida" y selecciona la carpeta de tu proyecto.

**2.- Mozilla Firefox:**
- Ve a about:debugging#/runtime/this-firefox.
- Haz clic en "Cargar complemento temporal" y selecciona el archivo manifest.json de tu proyecto.
