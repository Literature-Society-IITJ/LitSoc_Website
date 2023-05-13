from django.urls import path, include
from . import views
from home.views import MemberRegistrationView, MemberLoginView, MemberProfileView, MemberToModeratorView
from rest_framework import routers


# app_name = 'home'

# router = routers.DefaultRouter()
# router.register(r'members', memberViewSet)

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path("", views.index, name="index"),
    path("login/", MemberLoginView.as_view(), name="login"),
    path("register/", MemberRegistrationView.as_view(), name='register'),
    path("profile/", MemberProfileView.as_view(), name="profile"),
    path('newmoderator/', MemberToModeratorView.as_view(), name='newmoderator')
]