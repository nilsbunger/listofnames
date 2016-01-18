from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Name(models.Model):
    the_name = models.CharField(max_length=30)
