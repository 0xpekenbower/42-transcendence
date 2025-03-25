#!/bin/bash

pip install --upgrade pip
python -m pip install -r requirements.txt || (echo 'failed to install the requirement' && exit 1)
python manage.py makemigrations users || (echo 'failed to make users migrations' && exit 1)
python manage.py makemigrations || (echo 'failed to makemig' && exit 1)
python manage.py migrate --run-syncdb || (echo 'failed to migrate' && exit 1)
while true; do python manage.py runserver 0.0.0.0:8000 || (echo 'failed to start the server' && exit 1)
echo "[+] Srv started 8000" ; echo "server crached.. restarting"; sleep 1; done