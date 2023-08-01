# backend/views.py
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Movie
from .serializers import MovieSerializer

# backend/views.py

from django.http import JsonResponse

# def save_new_movie(name, description, release, duration, img):
#     # Create a new movie object and save it to MongoDB
#     new_movie = Movie(name=name, description=description, release=release, duration=duration, img=img)
#     new_movie.save()

    
# def save_movie(request):
#     # Create a new movie object and save it to MongoDB
#     new_movie = Movie(name='The Godfather', description='...', release=1972, duration='2h 55min', img='./movie-img/the-god-father.png')
#     new_movie.save()

#     # You can redirect to another page or return an appropriate response
#     return render(request, 'movie_saved.html')


# def get_movies(request):
#     # Get all movies from MongoDB
#     all_movies = Movie.objects.all()
#     return render(request, 'movies_list.html', {'movies': all_movies})

# class MovieList(APIView):
#     def get(self, request):
#         movies = Movie.objects.all()
#         serializer = MovieSerializer(movies, many=True)
#         return Response(serializer.data)
    
@api_view(['GET'])
def movie_list(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)