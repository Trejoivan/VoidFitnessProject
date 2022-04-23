from rest_framework import serializers
from .models import *

class WorkoutListSerializer(serializers.ModelSerializer): 
  class Meta:
    model = WorkoutList
    fields = ['id', 'name', 'description', 'finished_workout', 'workouts']

  finished_workout = serializers.SerializerMethodField(read_only=True)
  workouts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

  def get_finished_workout(self, instance):
    return instance.is_completed()


class WorkoutSerializer(serializers.ModelSerializer):
  class Meta:
    model = Workout
    fields = ['id', 'name', 'bodyPart', 'gifUrl', 'PRreps', 'PRsets', 'PRweight', 'target', 'workoutList', 'finished_workout' ] 