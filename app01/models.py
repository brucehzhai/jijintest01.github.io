from django.db import models

# Create your models here.
class UserInfo(models.Model):
    # 创建字段
    name = models.CharField(verbose_name="用户名",max_length=32)
    password = models.CharField(verbose_name="密码",max_length=64)
    age = models.IntegerField(verbose_name="年龄")
    gender_choices = (
        (1, "男"),
        (2, "女"),
    )
    gender = models.SmallIntegerField(verbose_name="员工性别", choices=gender_choices)


