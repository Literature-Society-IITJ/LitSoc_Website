from django.urls import path
from home.views import (MemberRegistrationView, MemberLoginView,
                        MemberProfileView, MemberToModeratorView,
                        ModeratorToMemberView, ProfileImageUploadView,
                        MemberVerificationView, ReadBooksView,
                        UsernameChangeView
                        )

urlpatterns = [
    path("login/", MemberLoginView.as_view(), name="login"),
    path("register/", MemberRegistrationView.as_view(), name='register'),
    path("profile/", MemberProfileView.as_view(), name="profile"),
    path("newmoderator/", MemberToModeratorView.as_view(), name='newmoderator'),
    path(
        "removemoderator/", 
        ModeratorToMemberView.as_view(),
        name='removemoderator'
    ),
    path(
        "updateprofileimage/",
        ProfileImageUploadView.as_view(),
        name='updateprofileimage'
    ),
    path(
        "emailverification/",
        MemberVerificationView.as_view(),
        name='emailverification'
    ),
    path("readbooks/", ReadBooksView.as_view(), name='readbooks'),
    path(
        "changeusername/", UsernameChangeView.as_view(), name="changeusername"
    ),
]
