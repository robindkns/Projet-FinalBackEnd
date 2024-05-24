# Generated by Django 4.2.11 on 2024-05-13 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=70)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='images/')),
                ('location', models.CharField(max_length=200)),
                ('video', models.CharField(max_length=500)),
            ],
        ),
    ]
