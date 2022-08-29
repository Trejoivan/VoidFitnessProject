
# Void Fitness

[DEPLOYED LINK](https://strongestlink.herokuapp.com/#/) 

I created this full-stack application for my final project for Code Platoon , utilizing all the skills I gained withing the 14 weeks of the coding bootcamp.The idea behind Void is to have a localized application to create, manage, and motivate you throughout your fitness journey!

## Git Workflow Steps:
0. (assumes you've already cloned down a local copy and are in the repo directory)
1. Fetch any changes that may exist from remote `git fetch`
2. Decide what feature you're working on, create a new branch with `git switch -c branchname`, this will create and switch to that branch simultaneously
3. Write your feature, make sure it works and doesn't break anything
4. Add and commit your changes (if you need to stop working and want to save your progress without adding/committing, you can run `git stash` and they will be safely stored.  `git stash pop` in the same branch will restore all the working changes)
5. Push your feature branch up to remote with `git push -u origin branchname`, if it doesn't let you do this because you don't have remote changes, run `git fetch` or `git fetch --all` first and try again
6. There will be a link in the commandline you can click and follow to open a pull request in Github, go ahead and do that
7. If you need to delete a branch you've pushed up on accident, you can do `git push -d origin branchname` and it will be deleted off of Github.
  
## Local deploy steps: 
1. Clone the repository:

```sh
$ https://github.com/quebecplatoon/VoidFitnessProject.git
$ cd gp_gym_social_app
```
___

2. Create virtual environment to install backend dependencies:

```sh
$ cd backend
$ python -m venv .venv
```

___

3. Activate virtual environment:
```sh
$ source .venv/bin/activate
```
___

4. Install dependencies:

```sh
$ (.venv) pip install -r requirements.txt
```

Note the (.venv) in front of the prompt. This indicates that this terminal session operates in a virtual environment.

___

5. Create PostgreSQL database:
```sh
$ createdb fitnessdb
```

___

6. Make migrations:
```sh
$ python manage.py makemigrations
```

___

7. Run migrations:

```sh
$ python manage.py migrate
```

___

8. Run the server:

```sh
$ (.venv) python manage.py runserver
```
___

9. Run the frontend:

```sh
(.venv) $ cd ..
(.venv) $ cd frontend
(.venv) $ npm install 
(.venv) $ npm start
```


