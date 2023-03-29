from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from team.serializers import TeamViewSerializer, TeamUpdateSerializer
from django.contrib.admin.views.decorators import staff_member_required
# Create your views here.

class TeamUpdate(APIView):
    # @staff_member_required
    def post(self, request, format=None):
        serializer = TeamUpdateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            new = serializer.save()
            return Response({'new':serializer.data, 'msg':'Team Updated Successfully'})
        return Response(serializer.errors)

class TeamView(APIView):
    def get(self, request, format=None):
        serializer = TeamViewSerializer()
        return Response(serializer.data)
    