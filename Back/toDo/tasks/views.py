from django.shortcuts import render
from .models import Task
from django.core import serializers
from django.http import HttpResponse


# Create your views here.
def get_all_tasks(request):
    qs = Task.objects.all()
    qs_json = serializers.serialize('json', qs)
    return HttpResponse(qs_json, content_type='application/json')
