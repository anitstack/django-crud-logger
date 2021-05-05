from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework import status, generics
from rest_framework.renderers import TemplateHTMLRenderer
from .serializers import UserSerializer
from ..models import User
from django.shortcuts import render
from rest_framework.views import APIView
import logging
import json
import ast
logger = logging.getLogger(__name__)



def homepage(request):
    return render(request, 'dashboard.html')


class UserListCreateView(generics.ListCreateAPIView):
    """
    Api for create and get list of all users
    """
    serializer_class = UserSerializer
    # permission_classes = (IsAuthenticated, )
    queryset = User.objects.all()


class UserGetUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    Api for get, update and delete user
    """
    serializer_class = UserSerializer
    # permission_classes = (IsAuthenticated, )
    queryset = User.objects.all()


class UserLogsInfo(generics.ListAPIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'logs.html'

    def get(self, request):
        with open('logs/info.log') as f:
            f = f.readlines()
        f.reverse()
        logs = []
        for each in f[:20]:
            if 'requestlogs-' in each:
                each = each.strip().split("requestlogs-")
                logdata = json.loads(json.dumps(str(each[-1])))
                logs.append(logdata)
        return Response({"logs":logs})

