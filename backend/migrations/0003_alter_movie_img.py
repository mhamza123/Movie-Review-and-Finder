# Generated by Django 4.1.10 on 2023-08-01 10:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_remove_movie_image_remove_movie_release_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='img',
            field=models.ImageField(default='default_image.png', upload_to='movie-img/'),
        ),
    ]
