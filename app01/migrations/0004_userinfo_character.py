# Generated by Django 5.0.2 on 2024-04-12 01:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app01', '0003_rename_pwd_userinfo_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='character',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
