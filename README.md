Overview
========

Project that uses Django, Flux, React, REST API with functionality implemented using Behave

Load initial Data
============

python manage.py loaddata initial_data.json

Set up NODEJS Env
==============

Install Node in Virtualenv
------------

You may need to:

1. $ pip install nodeenv
1. $ nodeenv -p 

now you should have npm

Set up Node development env
------------

Inspired by - http://www.code-experience.com/async-requests-with-react-js-and-flux-revisited/

Some other background on flux - https://medium.com/brigade-engineering/what-is-the-flux-application-architecture-b57ebca85b9e#.yii7uz5qi

Steps to set up dev:

1. $ cd icebreaker/static/react
1. $ npm install
1. $ npm run dev


To test the REST API
==========

Inspired by - http://www.django-rest-framework.org/tutorial/quickstart/

To test REST API

1. Make sure you loaded the initial_data.json 
1. python manage.py createsuperuser
1. " runserver
1. curl -H 'Accept: application/json; indent=4' -u admin:password http://127.0.0.1:8000/names/


Behave
==========

Inspired by

* http://chimera.labs.oreilly.com/books/1234000000754/ape.html
* http://pythonhosted.org/behave/tutorial.html

To run features in icebreaker/features

* $ python manage.py behave


