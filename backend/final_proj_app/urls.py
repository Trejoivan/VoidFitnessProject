from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register("workout-lists", WorkoutListViewSet, basename="workout-lists")
router.register("workouts", WorkoutViewSet, basename="workouts")
router.register("users", UserViewSet, basename="users")

urlpatterns = [
  path("", include(router.urls)),
  path("login/", handle_login),
  path("logout/", handle_logout)
]
