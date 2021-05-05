from django.contrib import admin
from django.urls import path, include
from .views import (
    UserListCreateView,
    UserGetUpdateDestroyView,
    homepage,
    UserLogsInfo,
)

app_name = 'dashboard'

urlpatterns = [
    path('', homepage),
    path('user/', UserListCreateView.as_view()),
    path('user/<int:pk>/', UserGetUpdateDestroyView.as_view()),
    path('logs/', UserLogsInfo.as_view())
]