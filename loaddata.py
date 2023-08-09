# load_data.py
import os
import json
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Testing.settings")
django.setup()

from backend.models import Movie

def load_data():
    with open('movie/data/movie-db.json') as file:
        data = json.load(file)
        for movie_data in data['movie']:
            Movie.objects.create(
                name=movie_data['name'],
                description=movie_data['Description'],
                release=movie_data['release'],
                duration=movie_data['duration'],
                img=movie_data['img'],
                id=movie_data['id']
            )

if __name__ == '__main__':
    load_data()
