from django.db import models
from django.contrib.auth.models import User


class WorkoutList(models.Model):
  name = models.CharField(max_length=64)
  description = models.CharField(max_length=255, blank=True)
  creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="workoutLists", null=True, default=None)

  def is_completed(self):
    return all([workout.finished_workout for workout in self.workouts.all()])
  
  def __str__(self):
    return self.name

class Workout(models.Model):
  workout = models.CharField(max_length=64)
  bodyPart = models.CharField(max_length= 64)
  gifUrl = models.CharField(max_length= 64)
  PRreps = models.CharField(max_length=100)
  PRsets = models.CharField(max_length=55)
  PRweight = models.CharField(max_length=100)
  target = models.CharField(max_length=64)
  workoutList = models.ForeignKey(WorkoutList, on_delete=models.CASCADE, related_name='workouts')
  finished_workout = models.BooleanField(default=False)
  equipment = models.CharField(max_length=90, null=True, default='cable')

  def __str__(self):
    return self.workout


# class Records(models.Model):
#   PRWeight = models.TextField()
#   PRReps = models.ForeignKey(Workout, on_delete=models.CASCADE, related_name="workout-record")
#   author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="record", default="")
#   date = models.DateTimeField(auto_now_add=True, blank=True)

