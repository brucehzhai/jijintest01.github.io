from django.shortcuts import render, redirect
from django.db.models import Q
from django.contrib.auth.hashers import make_password, check_password
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.http import HttpResponse, HttpResponseServerError
from app01 import models
from django.db.models import Q

from app01.models import userinfo

# Create your views here.
def index(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')


def register(request):
    if request.method == 'POST':

        # 如果是POST请求，则执行以下代码

        name = request.POST.get('name')
        password = request.POST.get('password')


        email = request.POST.get('email')

        # 在这里进行用户输入的验证逻辑

        userinfo.objects.create(name=name, email=email, password=password)
        return redirect('/login/')

    else:
        # 如果是GET请求，则执行以下代码
        return render(request, 'register.html')





# Create your views here.

def login(request):
    if request.method == "GET":
        return render(request, "Login.html")

    # 如果是POST请求，获取用户提交的数据
    name = request.POST.get('name')
    password = request.POST.get('password')
    if models.userinfo.objects.filter(
            Q(name=name) & Q(password=password)
    ):
        # 网站生成随机字符串; 写到用户浏览器的cookie中；在写入到session中；
        request.session["info"] = {'name': name}
        # session可以保存7天
        print(request.session["info"])
        request.session.set_expiry(60 * 60 * 24 * 7)

        return redirect('/contact/')
def contact(request):
    return  render(request,'contact.html')


