#!bin/sh

# Start the back-end server
cd backend 
rm */__pycache__/*
deactivate

rm -rf env

python3.9 -m venv env
source env/bin/activate
python3.9 -m pip install --upgrade pip
python3.9 -m pip install -r requirements.txt

python3.9 manage.py makemigrations
python3.9 manage.py migrate

python3.9 manage.py runserver 0.0.0.0:8000