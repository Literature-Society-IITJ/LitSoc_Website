from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', include("home.urls")),
    path('team/', include("team.urls")),
    path('library/', include("library.urls")),
    path('readerSection/', include("readerSection.urls")),
    path('puzzle/', include("puzzles.urls"))
]
