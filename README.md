python manage.py loaddata initial_data.json

-------

NODEJS Env

You may need to:
> pip install nodeenv
> nodeenv -p 

now you should have npm

cd icebreaker/static/react
npm install
npm run dev

-------

To test REST API
0) Make sure you loaded the initial_data.json 
1) python manage.py createsuperuser
2) " runserver
3) curl -H 'Accept: application/json; indent=4' -u admin:password http://127.0.0.1:8000/names/