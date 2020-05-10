"""Ecommerce_sam URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
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
from django.urls import path, include
from .views import home, all_products, product_detail, checkout, cart

urlpatterns = [
    path('',home ,name='home'),
    path('all_products/', all_products, name='all_products'),
    path('cart/', cart, name='cart'),
    path('checkout/', checkout, name='checkout'),
    path('product_detail/', product_detail, name='product_detail'),
]
