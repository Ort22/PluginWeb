import json

def lambda_handler(event, context):
    # Extraer URLs de las imágenes desde el cuerpo de la petición
    body = json.loads(event['body'])
    urls = body.get('urls', [])

    # Procesar los URLs (en este caso, simplemente los regresamos)
    response = {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST'
        },
        'body': json.dumps({'extracted_urls': urls})
    }

return response
