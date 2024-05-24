# Generated by Django 5.0.4 on 2024-05-14 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('poste', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='images/')),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Manager',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('poste', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='images/')),
                ('quote', models.CharField(max_length=200)),
            ],
        ),
    ]
