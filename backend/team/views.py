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
            return Response({'new':serializer.data, 'msg':'Team Updated Successfully'})
        return Response(serializer.errors)

class TeamView(APIView):
    queryset = Team.objects.all()
    serializer_class = TeamViewSerializer()
    def get(self, request, format=None):
        query_set = list(self.queryset.values())
        return Response(query_set)
        # if serializer.is_valid(raise_exception=True):
        #     return Response(serializer.data)
        # return Response(serializer.errors)
    