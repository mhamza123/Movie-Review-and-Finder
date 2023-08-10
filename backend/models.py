from django.db import models

class Movie(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    release = models.CharField(max_length=4)
    duration = models.CharField(max_length=10)
    img = models.CharField(max_length=100)
    id = models.IntegerField(primary_key=True)

    def __str__(self):
        return self.name
    

class User(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)