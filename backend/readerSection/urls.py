from django.contrib import admin
from django.urls import path
from readerSection.views import ContentReadView, ContentUploadView, IsAdminView, ContentApprovalView

urlpatterns = [
    path('', ContentReadView.as_view(), name='read'),
    path('upload/', ContentUploadView.as_view(), name='upload'),
    path('contentapproval/', ContentApprovalView.as_view(), name='contentapproval'),
    path('isadmin/', IsAdminView.as_view(), name='isadmin')
]