from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password, check_password
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.http import HttpResponse, HttpResponseServerError
from app01 import models


from app01.models import userinfo

# Create your views here.
def index(request):
    return render(request, 'index.html')


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

        return redirect('/index/')



