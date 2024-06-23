document.getElementById('extract').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: extractImageUrls,
  }, async (results) => {
      if (results && results[0] && results[0].result) {
          const dataToSend = { urls: results[0].result };

          // Imprimir los datos que se están enviando a Lambda en el HTML del plugin
          document.getElementById('sending-data').innerText = JSON.stringify(dataToSend, null, 2);

          try {
              const response = await fetch(' https://0f812ny2le.execute-api.us-east-2.amazonaws.com/default/extract-urls', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(dataToSend)
              });

              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }

              const data = await response.json();

              // Imprimir la respuesta de Lambda en el HTML del plugin
              document.getElementById('response-data').innerText = JSON.stringify(data, null, 2);

              // Mostrar la respuesta en el elemento con id "output"
              document.getElementById('output').innerText = JSON.stringify(data, null, 2);
          } catch (error) {
              console.error('Error:', error);
              document.getElementById('output').innerText = `Error: ${error.message}`;
          }
      }
  });
});

function extractImageUrls() {
  let images = document.querySelectorAll('img');
  let urls = [];
  images.forEach(img => urls.push(img.src));
  return urls;
}