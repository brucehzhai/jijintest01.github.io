from django.db import models

# Create your models here.
class UserInfo(models.Model):
    # 创建字段
    name = models.CharField(max_length=32)
    password = models.CharField(max_length=64)
    age = models.IntegerField()

