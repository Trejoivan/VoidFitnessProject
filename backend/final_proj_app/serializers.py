from rest_framework import serializers
from .models import *
from django.contrib.auth.hashers import make_password

class WorkoutListSerializer(serializers.ModelSerializer): 
  class Meta:
    model = WorkoutList
    fields = ['id', 'name', 'description', 'finished_workout', 'workouts', 'creator']

  finished_workout = serializers.SerializerMethodField(read_only=True)
  workouts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

  def get_finished_workout(self, instance):
    return instance.is_completed()


class WorkoutSerializer(serializers.ModelSerializer):
  class Meta:
    model = Workout
    fields = ['id', 'workout', 'bodyPart', 'gifUrl', 'PRreps', 'PRsets', 'PRweight', 'target', 'workoutList', 'finished_workout' ] 



class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', "username", "password"] 

  password = serializers.CharField(write_only=True)

  def create(self, validated_data):
    validated_data['password'] = make_password(validated_data['password'])
    return super().create(validated_data)

# class RecordSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Records
#     fields = ["id" , "PRWeight" , "PRReps", "author"]
    
#   def to_representation(self, instance):
#     data = super().to_representation(instance)
#     author = User.objects.get(pk=data["author"])
#     data["author"] = author.username
#     return data

