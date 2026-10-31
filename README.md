# 📻 Coclea — Radios chilenas en vivo

**ES** · Página web para escuchar radios chilenas en vivo, con reproductor, mini reproductor y un muro de mensajes tipo chat que se actualiza cada 5 segundos.
**EN** · Web app to stream Chilean radio stations live, with a player, a mini player and a chat-style message wall that refreshes every 5 seconds.

## Funcionalidades / Features

- Listado de radios con su dial y reproducción en vivo / Station list with live streaming
- Mini reproductor / Mini player
- API JSON de emisoras (`/emisoras-json/`) / Stations JSON API
- Muro de mensajes en tiempo real con validación de largo / Real-time message wall with input validation
- Fondos de video optimizados (MP4 en vez de GIF) / Optimized video backgrounds (MP4 instead of GIF)

## Tecnologías / Stack

Python · Django 5 · JavaScript · HTML · CSS · SQLite · Gunicorn · WhiteNoise

## Ejecutar en local / Run locally

```bash
cd radioscl
python -m venv venv
venv\Scripts\activate        # Windows  (macOS/Linux: source venv/bin/activate)
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Publicar en Render / Deploy on Render

El repositorio incluye `render.yaml` y `radioscl/build.sh`. En Render: **New → Blueprint**, elige este repositorio y listo. Render genera la `SECRET_KEY` automáticamente.

Para que el sitio publicado tenga las radios, exporta tus emisoras una vez desde tu base local:

```bash
cd radioscl
python manage.py dumpdata coclea.EstacionRadio --indent 2 > coclea/fixtures/estaciones.json
```

> En el plan gratuito de Render la base SQLite se reinicia en cada despliegue: las radios se vuelven a cargar desde el archivo, pero los mensajes del muro se borran.

## Autor / Author

Tomás Vega · [github.com/T-VeMo](https://github.com/T-VeMo)
