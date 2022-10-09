from django.shortcuts import render
from .models import Task
from django.core import serializers
from django.http import HttpResponse,QueryDict
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.
def get_all_tasks(request):
    qs = Task.objects.all()
    qs_json = serializers.serialize('json', qs)
    return HttpResponse(qs_json, content_type='application/json')


def getTask(request,pk):
    task = Task.objects.get(id=pk)
    task_json = serializers.serialize('json',[task])
    return HttpResponse(task_json,content_type='application/json')

@csrf_exempt
def editTask(request,pk):
    task = Task.objects.get(id=pk)

    if request.method == 'PUT':

        data = json.loads(request.body.decode('utf-8'))
        title = data.get('title')
        description = data.get('description')
        if title is not None:
            task.title = title

        if description is not None:
            task.description = description
        task.save()

    return HttpResponse('OK')
