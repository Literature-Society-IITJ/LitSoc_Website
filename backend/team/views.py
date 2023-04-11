from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from team.serializers import TeamViewSerializer, TeamUpdateSerializer
from django.contrib.admin.views.decorators import staff_member_required
from team.models import Team
# Create your views here.

class TeamUpdate(APIView):
    # @staff_member_required
    def post(self, request, format=None):
        serializer = TeamUpdateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            new = serializer.save()
            return Response({'new': serializer.data, 'msg': 'Team Updated Successfully'})
        return Response(serializer.errors)

# class TeamView(APIView):
#     # def __init__(self):
#     #     self.new = None
#     # queryset = Team.objects.all()
#     def get(self, request, format=None):
#         serializer = TeamViewSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             new = request.data.get('year')
#             team = Team.objects.filter(year = str(new)).values()
#             # print(list(team))
#             return Response(list(team))

    
class TeamView(APIView):

    def get(self, request, format=None):
        
        # __request.GET and request.query_params are same__
        
        # serializer = TeamViewSerializer(data=request.GET)
        serializer = TeamViewSerializer(data=request.query_params)
        if serializer.is_valid(raise_exception=True):
            year = serializer.data.get('year')
            team = Team.objects.filter(year = str(year)).values()
            return Response(list(team))