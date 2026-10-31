# 📻 Coclea — Radios chilenas en vivo

🔗 https://tepuku.pythonanywhere.com/

**ES** · Página web para escuchar radios chilenas en vivo, con reproductor, mini reproductor y un muro de mensajes tipo chat que se actualiza cada 5 segundos.
**EN** · Web app to stream Chilean radio stations live, with a player, a mini player and a chat-style message wall that refreshes every 5 seconds.

## Funcionalidades / Features

- Listado de radios con su dial y reproducción en vivo / Station list with live streaming
- Mini reproductor / Mini player
- API JSON de emisoras (`/emisoras-json/`) / Stations JSON API
- Muro de mensajes en tiempo real con validación de largo / Real-time message wall with input validation
- Fondos de video optimizados (MP4 en vez de GIF) / Optimized video backgrounds (MP4 instead of GIF)

## Tecnologías / Stack

Python · Django 5 · JavaScript · HTML · CSS · SQLite · PythonAnywhere

## Ejecutar en local / Run locally

```bash
cd radioscl
python -m venv venv
venv\Scripts\activate        # Windows  (macOS/Linux: source venv/bin/activate)
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## En línea / Live

🔗 **https://tepuku.pythonanywhere.com/** (PythonAnywhere)

En producción se definen dos variables de entorno: `SECRET_KEY` (una clave larga y aleatoria) y `DEBUG=False`.
In production, set `SECRET_KEY` (a long random key) and `DEBUG=False` as environment variables.

## Autor / Author

Tomás Vega · [github.com/T-VeMo](https://github.com/T-VeMo)
