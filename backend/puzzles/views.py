from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Puzzle
# Create your views here.

class PuzzleView(APIView):
    def get(self, request):
        puzzles = Puzzle.objects.all().values()
        return Response(list(puzzles), status=status.HTTP_200_OK)
    
    def post(self, request, format='pdf'):
        new_puzzle = Puzzle.objects.create(made_by=request.data.get('made_by'),
                                           puzzle_type=request.data.get('puzzle_type'),
                                           puzzle=request.FILES['puzzle'])
        new_puzzle.save()
        return Response("Details added succesfully", status=status.HTTP_200_OK)
