from django.db import models

# Create your models here.
class userinfo(models.Model):
    # 创建字段
    name = models.CharField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    character = models.CharField(max_length=255, blank=True, null=True)


class CommodityCode(models.Model):
    code = models.CharField(max_length=255, blank=True, null=True)

class realCommodityCode(models.Model):
    plantcode = models.CharField(max_length=255, blank=True, null=True)




