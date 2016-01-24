from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import detail_route

from models import *

from rest_framework import viewsets
from serializers import NameSerializer, UserSerializer, MessagesSerializer


# Create your views here.
def index(request):
    context = {}
    return render(request, 'listofnames/index.html', context)


class NameViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows names to be viewed or edited.
    """
    queryset = Name.objects.all()
    serializer_class = NameSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class MessageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows messages to be viewed or edited.
    """
    queryset = Message.objects.all()
    serializer_class = MessagesSerializer

    # # custom action to get message replies (responds to GET only)
    # @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    # def replies(self, request, *args, **kwargs):
    #     message = self.get_object()
    #     pass

    def perform_create(self, serializer):
        serializer.save()
        print "HI"
        pass



