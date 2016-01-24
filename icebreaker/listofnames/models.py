from __future__ import unicode_literals

from django.db import models

class Name(models.Model):
    the_name = models.CharField(max_length=30)

class MessageThread(models.Model):
    created_time = models.DateTimeField(auto_now_add=True)

class Message(models.Model):
    created_time = models.DateTimeField(auto_now_add=True)
    text = models.TextField()
    in_reply_to = models.ForeignKey("self", blank=True, null=True) # self-referential foreign key
