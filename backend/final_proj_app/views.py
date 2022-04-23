from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *

# Create your views here.
class WorkoutListViewSet(ModelViewSet):
  queryset = WorkoutList.objects.all()
  serializer_class = WorkoutListSerializer


class WorkoutViewSet(ModelViewSet):
  queryset = Workout.objects.all()
  serializer_class = WorkoutSerializer

  def create(self, request, *args, **kwargs):
    try:
      return super().create(request, *args, **kwargs)
    
    except Exception as e:
      print('/////ERROR IVAN', e)
      raise(e)




# def create(self, validated_data):
#         validated_data["password"] = make_password(validated_data["password"])
#         if "bf_api_id" in validated_data and "bf_api_key" in validated_data:
#             if validated_data["bf_api_id"] and validated_data["bf_api_key"]:
#                 validated_data["bf_user"] = True
#         return super().create(validated_data)
