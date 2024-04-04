"""
URL configuration for test01 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app01 import views

urlpatterns = [
    path('index/', views.index),
    path('register/', views.register),
    path('login/', views.login),
    path('contact/', views.contact),
    path('trace/', views.trace),
    path('travel/', views.travel),
    path('kepu/', views.kepu),
    path('safety/', views.safety),
    path('information/', views.information),
    path('question/', views.question),
    path('sow/', views.sow),
    path('transport/', views.transport),
    path('cook/', views.cook),
    path('effect/', views.effect),
    path('Pet_shop/', views.Pet_shop),
    path('policy/', views.policy),
    path('news/', views.news),
    path('about/', views.about),
    path('error/', views.error),
    path('blockinput/', views.blockinput),
    path('blockvisual/', views.blockvisual),
    path('trace_copy/', views.trace_copy),


]
