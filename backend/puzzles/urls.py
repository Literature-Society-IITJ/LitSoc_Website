from django.urls import path
from .views import PuzzleView

urlpatterns = [
    path('', PuzzleView.as_view(), name='puzzles'),
    path('add/', PuzzleView.as_view(), name='puzzleadd'),
]