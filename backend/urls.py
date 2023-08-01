# backend/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('api/movies/', views.movie_list, name='movie-list'),
    # Add other URL patterns if needed
    path('api/login/', views.login_view, name='login'),
    path('api/register/', views.register_view, name='register'),
]
