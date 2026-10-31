#!/usr/bin/env bash
# Script de build para Render
set -o errexit
pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py migrate
# Carga las radios si existe el archivo de datos
if [ -f coclea/fixtures/estaciones.json ]; then
  python manage.py loaddata estaciones
fi
