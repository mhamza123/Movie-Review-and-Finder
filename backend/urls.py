# backend/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('api/movies/', views.movie_list, name='movie-list'),
    # Add other URL patterns if needed
]