from django.shortcuts import render
from rest_framework import status
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
        if serializer.is_valid():
            new = serializer.save()
            return Response({'new': serializer.data, 'msg': 'Team Updated Successfully'}, status=status.HTTP_200_OK)
        return Response("Please check the credentials", status=status.HTTP_404_NOT_FOUND)


class TeamView(APIView):

    def get(self, request, format=None):
        positions = {'1':['Captain', 'Secretary'], '2':['Vice Captain', 'Joint Secretary', 'Head']}
        # __request.GET and request.query_params are same__
        
        # serializer = TeamViewSerializer(data=request.GET) 
        serializer = TeamViewSerializer(data=request.query_params)

        if serializer.is_valid():
            year = serializer.data.get('year')
            team = Team.objects.filter(year = str(year)).values()
            # temp = list(team)
            # final = []
            new1 = []
            new2 = []

            for i in team:
                if i['por'] in positions['1']:
                    new1.append[i]

                elif i['por'] in positions['2']:
                    new2.append[i]

            final = [{'title': new1[0]['por'], 'members': new1}, {'title': new2[0]['por'], 'members': new2}]

            return Response(final, status=status.HTTP_200_OK)
        return Response("Please check the credentials", status=status.HTTP_404_NOT_FOUND)
