from django.contrib import admin
from django.urls import path
from library.views import BookIssueView, BookAddView, BookSearchView

urlpatterns = [
    path('issue/', BookIssueView.as_view(), name='bookissue'),
    path('add/', BookAddView.as_view(), name='bookadd'),
    path('', BookSearchView.as_view(), name='BookSearchView'),
    # path('update/', TeamUpdate.as_view())
]