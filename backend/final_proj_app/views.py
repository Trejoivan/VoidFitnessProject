from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .views_auth import handle_login, handle_logout
from rest_framework.permissions import AllowAny, IsAuthenticated

# Create your views here.

class WorkoutListViewSet(ModelViewSet):
  serializer_class = WorkoutListSerializer
  permission_classes = [IsAuthenticated]

  def perform_create(self, serializers):
    serializers.save(creator=self.request.user)
    return super().perform_create(serializers)

  def get_queryset(self):
    if self.request.user.is_superuser:
      return WorkoutList.objects.all()
    return WorkoutList.objects.filter(creator=self.request.user)


class WorkoutViewSet(ModelViewSet):
  queryset = Workout.objects.all()
  serializer_class = WorkoutSerializer
  permission_classes = [AllowAny]


class UserViewSet(ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

  def get_permissions(self):
    permission_classes = [AllowAny]
    return [permission() for permission in permission_classes]

  # def get_permissions(self):
  #   if self.request.method == 'POST':
  #     return (permissions.AllowAny(), )
    
  #   return (permissions.IsAdminUser(),)

