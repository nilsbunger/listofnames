from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse
from models import *

from rest_framework import viewsets
from serializers import NameSerializer, UserSerializer


# Create your views here.
def index(request):
    context = {}
    return render(request, 'listofnames/index.html', context)


class NameViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Name.objects.all()
    serializer_class = NameSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
