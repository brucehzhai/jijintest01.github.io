from django.shortcuts import render,HttpResponse
from django.db.models import Q
# Create your views here.
def index(request):
    return HttpResponse('HELLO WORLD')


def register(request):
    if request.method == "GET":
        return render(request, "Register.html")
    username = request.POST.get("name")
    if models.Userinfo.objects.filter(name=username):
        return render(request, "Login.html", {"error_msg": "该账号已被注册"})
    password = request.POST.get("password")
    if not username or not password:
        return render(request, "Register.html", {"error_msg": "用户名或密码不能为空"})
    email = request.POST.get("email")
    models.Userinfo.objects.create(name=username, pwd=password)
    print("注册成功")
    return render(request, "Login.html", {"error_msg": "您已注册成功，请登录！~"})

def login(request):
    if request.method == "GET":
        return render(request, "Login.html")

    # 如果是POST请求，获取用户提交的数据
    print(request.POST)
    name = request.POST.get('name')
    pwd = request.POST.get('pwd')
    if models.Userinfo.objects.filter(
            Q(name=name) & Q(pwd=pwd)
    ):
        # 网站生成随机字符串; 写到用户浏览器的cookie中；在写入到session中；
        request.session["info"] = {'name': name}
        # session可以保存7天
        print(request.session["info"])
        request.session.set_expiry(60 * 60 * 24 * 7)

        return redirect("index.html")
    else:
        return render(request, "Login.html", {"error_msg": "用户名或密码错误"})