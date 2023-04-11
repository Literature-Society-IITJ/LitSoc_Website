from django.contrib import admin
from django.urls import path
from library.views import BookIssueView, BookAddView, BookView

urlpatterns = [
    path('issue/', BookIssueView.as_view(), name='bookissue'),
    path('add/', BookAddView.as_view(), name='bookadd'),
    path('', BookView.as_view(), name='bookview'),
    # path('update/', TeamUpdate.as_view())
]