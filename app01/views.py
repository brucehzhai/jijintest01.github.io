from django.shortcuts import render, redirect
from django.db.models import Q
from django.contrib.auth.hashers import make_password, check_password
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.http import HttpResponse, HttpResponseServerError
from app01 import models
from django.db.models import Q

from app01.models import userinfo,CommodityCode

# Create your views here.
def index(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')


def register(request):
    if request.method == 'POST':

        # 如果是POST请求，则执行以下代码

        name = request.POST.get('name')
        pwd = request.POST.get('password')


        email = request.POST.get('email')

        # 在这里进行用户输入的验证逻辑

        userinfo.objects.create(name=name, email=email, pwd=pwd)
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

        return redirect('/index/')
def contact(request):
    return  render(request, 'contact.html')
def trace(request):
    return render(request, 'trace.html')

def travel(request):
    return render(request, 'travel.html')
def kepu(request):
    return render(request, 'kepu.html')
def safety(request):
    return render(request, 'safety.html')
def information(request):
    return render(request, 'information.html')
def question(request):
    return render(request, 'question.html')
def sow(request):
    return render(request, 'sow.html')
def transport(request):
    return render(request, 'transport.html')
def cook(request):
    return render(request, 'cook.html')

def effect(request):
    return render(request, 'effect.html')
def Pet_shop(request):
    return render(request,'Pet_shop.html')
def policy(request):
    return render(request,'policy.html')
def news(request):
    return render(request,'news.html')
def about(request):
    return render(request,'about.html')
def error(request):
    return render(request,'error.html')

def blockinput(request):
    if request.method == 'POST':
        # 如果是POST请求，则执行以下代码
        code = request.POST.get('commoditycode')
        # 在这里进行用户输入的验证逻辑
        CommodityCode.objects.create(code=code)
    else:
        return render(request, 'blockinput.html')
        # 如果是GET请求，则执行以下代码
        
    
    '''if request.method == 'POST':
        # 如果是POST请求，则执行以下代码
        code = request.POST.get('commoditycode')
        # 在这里进行用户输入的验证逻辑
        CommodityCode.objects.create(code=code)
    else:
        # 如果是GET请求，则执行以下代码
        pass
    return render(request, 'blockinput.html')'''

    
    

def blockvisual(request):
    return render(request,'blockvisual.html')
def trace_copy(request):
    return render(request,'trace_copy.html')