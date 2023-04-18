from django.contrib import admin
from django.urls import path
from readerSection.views import ReadView, ContentUploadView

urlpatterns = [
    path('', ReadView.as_view(), name='read'),
    path('upload/', ContentUploadView.as_view(), name='upload'),
]