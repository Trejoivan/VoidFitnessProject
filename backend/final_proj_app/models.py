from django.db import models

class WorkoutList(models.Model):
  name = models.CharField(max_length=64)
  description = models.CharField(max_length=255, blank=True)

  def is_completed(self):
    return all([workout.finished_workout for workout in self.workouts.all()])
  
  def __str__(self):
    return self.name

class Workout(models.Model):
  name = models.CharField(max_length=64)
  bodyPart = models.CharField(max_length= 64)
  gifUrl = models.CharField(max_length= 64)
  PRreps = models.CharField(max_length=100)
  PRsets = models.CharField(max_length=55)
  PRweight = models.CharField(max_length=100)
  target = models.CharField(max_length=64)
  workoutList = models.ForeignKey(WorkoutList, on_delete=models.CASCADE, related_name='workouts')
  finished_workout = models.BooleanField(default=False)

  def __str__(self):
    return self.name
  
