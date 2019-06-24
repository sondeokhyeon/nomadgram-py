from django.urls import path
from . import views

app_name = 'images'

urlpatterns = [
    path("", views.Feed.as_view(), name='feed'),
    path("<int:id>/like/", views.LikeImage.as_view(), name="Like_Image")
]
