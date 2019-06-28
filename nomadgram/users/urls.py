from django.urls import path
from . import views

app_name = "users"
urlpatterns = [
    path("explore/", views.ExploreUsers.as_view(), name="explore_users"),
    path("<int:user_id>/follow/", views.FollowUser.as_view(), name="follow_users"),
    path("<int:user_id>/unfollow/", views.UnFollowUser.as_view(), name="unfollow_users"),
    path("<username>/followers/", view=views.UserFollowers.as_view(), name="user_followers"),
    path("<username>/following/", view=views.UserFollowers.as_view(), name="user_following"),
    path("search/", view=views.Search.as_view(), name="search"),
    path("<username>/", view=views.UserProfile.as_view(), name="user_profile"),
    path("<username>/password/", view=views.ChangePassword.as_view(), name="password_change"),
    path("login/facebook/", view=views.FacebookLogin.as_view(), name="fb_login"),

]
