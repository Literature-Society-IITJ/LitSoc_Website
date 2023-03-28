from django.contrib import admin
from django.urls import path
from .views import TeamUpdate, TeamView

urlpatterns = [
    path('', TeamView.as_view(), name='team'),
    path('update/', TeamUpdate.as_view())
]