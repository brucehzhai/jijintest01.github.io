from django.shortcuts import render,HttpResponse

# Create your views here.
def index(request):
    return HttpResponse('HELLO WORLD')

def login(request):
    if request.method == "GET":
        return render(request, "tea_login.html")

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

        return redirect("/tea_index/")
    else:
        return render(request, "tea_login.html", {"error_msg": "用户名或密码错误"})


def register(request):
    if request.method == "GET":
        return render(request, "Register.html")
    username = request.POST.get("name")
    if models.Userinfo.objects.filter(name=username):
        return render(request, "tea_login.html", {"error_msg": "该账号已被注册"})
    sex = request.POST.get('sex')
    age = request.POST.get('age')
    password = request.POST.get("pwd")
    activation_code = string.ascii_uppercase + '0123456789'
    print(activation_code)
    ivt = ''
    for i in range(10):
        ivt += random.choice(activation_code)
    try:
        code = request.POST.get('code')
        score_1 = models.Userinfo.objects.get(ivt=code).score
        models.Userinfo.objects.filter(ivt=code).update(score=score_1 + 100)
    except Exception as e:
        print(e)
    finally:
        models.Userinfo.objects.create(name=username, pwd=password, sex=sex, age=age, ivt=ivt, score=0)
        print("注册成功")
    return render(request, "tea_login.html", {"error_msg": "您已注册成功，请登录！~"})