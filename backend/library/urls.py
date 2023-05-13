from django.contrib import admin
from django.urls import path
from library.views import BookIssueView, BookAddView, BookSearchView, BookIssueApprovalView, BookReturnView

urlpatterns = [
    path('issue/', BookIssueView.as_view(), name='bookissue'),
    path('add/', BookAddView.as_view(), name='bookadd'),
    path('', BookSearchView.as_view(), name='booksearch'),
    path('bookapproval/', BookIssueApprovalView.as_view(), name='bookapproval'),
    # path('update/', TeamUpdate.as_view())
    path('bookreturn/', BookReturnView.as_view(), name='bookreturn')
]