# Generated by Django 4.2.11 on 2024-05-21 07:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('facilities', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facilities',
            name='image',
            field=models.ImageField(null=True, upload_to='images/'),
        ),
    ]
