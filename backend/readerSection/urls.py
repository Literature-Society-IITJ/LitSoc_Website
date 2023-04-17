from django.contrib import admin
from django.urls import path
from readerSection.views import ReadView, FileUploadView

urlpatterns = [
    path('', ReadView.as_view(), name='read'),
    path('upload/', FileUploadView.as_view(), name='upload'),
]