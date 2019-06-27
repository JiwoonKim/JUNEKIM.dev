---
path: "/web50/9"
date: '2019-06-18'
title: "Web50 lecture 9 - CI/CD"
description: CS50 Web Programming with Javascript and Python lecture 9 정리
image: ''
tags: ['CS50', 'Web50', 'CI/CD']
---
> Harvard's Web Programming with Python and Javascript lecture 9 정리

### CI / CD
- __Continuous Integration__: 
    - consistently and frequently integrating code together for a team (merging to main branch)
    - __automating unit testing__
- __Continuous Delivery__:
    - making __incremental deliveries__ to application
    - __automating application deployment__
- `continuous` is the main key!
    - have integration and delivery continuously and frequently to avoid the overload and complications of doing each all in one cue
- __virtualization__: create virtual environments to ensure reproducability of apps
    - virtual machines(vmware), containers (docker)

### CI (Continuous Integration)
a development strategy that revolves around continually and frequently adding code to a codebase (to avoid the complications in integration all in once)
- __testing__: 
    - automated tests vs. manual tests
    - functional tests vs. non-functional tests 
- __CI Tools__: automated testing tool
    - CircleCI, Codeship, Jenkins, Travis CI

### Travis CI
- __how Travis CI works__:
    1. push code to GitHub
    2. GitHub notifies changes to Travis
    3. Travis pulls code from repo and runs tests
    4. GitHub notified of test results
- __setup Travis CI__:
    1. sync GitHub account w/ Travis (https://travis-ci.org)
    2. select repository to be tracked by Travis
    3. include `.travis.yml` file in repository
    4. then, after pushes to repo, Travis automatically runs tests and notifies user on Github (in commits)

#### Travis YAML
- YAML: common file format used for creating __configuration files__
    - lists tests, installations, etc.
    - __set of keys and values__
- __Travis YAML file__ (`.travis.yml`)
```yml
language: python
python: 3.6
install: pip install -r requirements.txt
script: python manage.py test
```

### Virtualization 
isolating an app and its dependencies into a self-contained unit so that they can run anywhere w/o compatibility issues; abstracting the complexities of installing necessary dependencies for an app
- __compatibility issues__: development environment <-> production environment
    - how to ensure the production environment will be identical to to development environment?
- __solutions__:
    - 사진
    - __virtual machine__: set a virtual operating system w/ configurations and dependencies
    - __containerization__: creating isolated containers that have just the things we want to have installed on them and use images instead of full-blown virtual machines; very useful in that do not have to install separate parts of app (ex. web server & database)

#### Docker
type of container 
- `DockerFile`: __define docker image__ (= __instructions for how container should be made__, where app will live in)
```yml
# inherit python:3 image
FROM python:3
# set working directory for app
WORKDIR /usr/src/app
# install all the dependencies
ADD requirements.txt /usr/src/app
RUN pip install -r requirements.txt
# add all the contents of current directory to app directory
ADD . /usr/src/app
```
- __docker commands__:
    - `docker ps`: list current docker containers
    - `docker build {dir_to_build_image}`: build an  image from docker file (by following the instructions)
    - `docker run {image_id}`: create container based on image and run it
    - `docker exec -it {container_id} bash -l`: run bash interactively in docker's container
- cf) `settings.py`: set database for project
```python
...
    # example for Django app (airline project)
    DATABASES = [
        'default': {
            # setting db to postgres for scalability reasons
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'postgres',
            'USER': 'postgres',
            'HOST': 'db',
            'PORT': 5432,
        }
    ]
```
- `docker-compose.yml`: __define all of the different services that make up the app__; compose multiple containers
```yml
version: '3'
services:
    # define database service
    db:
        # use postgres image to construct db
        image: postgres
    # define service for migrating changes
    migration:
        # build based on the docker file in current directory (-> will tell how to install all dependencies)
        build: .
        command: python3 manage.py migrate
        # link btw different files (current directory and app directory)
        volumes:
            - .:/usr/src/app
        # define dependency (make sure db is up first before using migration service)
        depends_on:
            - db
    # define web service
    web:
        # build based on docker file in current directory
        build: .
        command: python3 manage.py runserver 0.0.0.0:8000
        volumes:
            - .:usr/src/app
        # map port 8000 in container to port 8000 on current environment (computer)
        ports:
            - "8000:8000"
        depends_on:
            - db
            - migration
```
- __docker-compose commands__:
    - `docker-compose build`: build images based on yml file
    - `docker-compose up`: build images and start containers

### CD (Continuous Delivery)
a development strategy that revolves around continually and frequently delivering code to production
- __CD Tools__: 
    - __deployment__: Heroku, Amazon AWS

### Deployment

#### Heroku

- __how Heroku works__:
    1. 
- __deploy app to Heroku__:
    1. create a new app
    2. generate Heroku API key -> authorize Travis CI

### Development Workflow
a typical day for developers (using ex of GitHub Classroom)

#### Feature-branch Development
paradigm to develop new branch for each feature and merge back to master branch (= production branch); a type of strategy for continuous deployment
1. __fork repo__
2. `git clone {repo_url}`: clone repo to local computer
3. `git checkout -b {branch_name}`: create a feature branch
    - make changes for feature 
    - check the change w/ unit tests
4. `git push {forked_repo} {branch_name}`: push branch to forked repo
5. __compare and pull request__: start conversation about the changes made
    - check `from` and `to` repos
    - __automatically starts a build__ (Travis runs unit tests)
    - __co-workers reviews changes, provide feedback, and discuss changes__
6. __deployment__ (once the pull request is reviewed and accepted)
    - __Feature Flipper__: add code (__feature toggle__) so that a certain feature will appear only in the specified condition (used to deploy new features w/o impacting all users: can beta test while the original one is used for all users); ultimately, the feature toggle will be removed as the code is deployed to an increasing number of users and fully deployed
```html
<!-- if user exists and feature enabled for that user -->
{% if current_user && current_user.feature_enabled %}
    <!-- toggle feature on -->
    ... feature code
{% endif %}
```
        - use feature flipping to __continuously deploy features and code__
    - __pull request to actual repo and push code__ not the forked repo (Travis creates builds)
    - __deploy for production__
        - deployment may occur in chatroom (slack) instead of in command line

cf) __released-based development__: builds up the version 1.0 branch while also working on a 1.1 branch
