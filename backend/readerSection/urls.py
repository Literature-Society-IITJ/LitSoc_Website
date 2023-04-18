from django.contrib import admin
from django.urls import path
from readerSection.views import ContentReadView, ContentUploadView, ContentAdminApprovalView, ContentModeratorApprovalView

urlpatterns = [
    path('', ContentReadView.as_view(), name='read'),
    path('upload/', ContentUploadView.as_view(), name='upload'),
    path('moderatorapproval/', ContentModeratorApprovalView.as_view(), name='moderatorapproval'),
    path('adminapproval/', ContentAdminApprovalView.as_view(), name='adminapproval')
]