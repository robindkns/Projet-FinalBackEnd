# Generated by Django 4.2.11 on 2024-05-15 09:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pricing', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Faq',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=100)),
                ('response', models.CharField(max_length=200)),
                ('active', models.BooleanField()),
            ],
        ),
    ]
