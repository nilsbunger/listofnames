from django.contrib.auth.models import User
from models import Name
from rest_framework import serializers


class NameSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Name
        fields = ('the_name',)


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')
