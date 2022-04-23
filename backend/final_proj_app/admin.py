from django.contrib import admin
from .models import WorkoutList, Workout

admin.site.register(Workout)
admin.site.register(WorkoutList)