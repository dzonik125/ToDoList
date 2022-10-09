from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls import include

urlpatterns = [
    path('allTasks/', views.get_all_tasks),
    path('editTask/<pk>/',views.editTask),
    path('<pk>/',views.getTask),
]
