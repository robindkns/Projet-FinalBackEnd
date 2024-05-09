# Generated by Django 4.2.11 on 2024-05-09 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Amenity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=70)),
                ('image', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=70)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='images/')),
                ('price', models.FloatField()),
                ('size', models.IntegerField()),
                ('rating', models.FloatField()),
                ('beds', models.IntegerField()),
                ('quantity', models.IntegerField()),
                ('date_in', models.DateField()),
                ('date_out', models.DateField()),
                ('discount', models.IntegerField()),
                ('amenities', models.ManyToManyField(to='rooms.amenity')),
            ],
        ),
    ]