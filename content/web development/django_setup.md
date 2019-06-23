---
path: "/webdevelopment/backend/django/setup"
date: '2018-01-26'
title: "Django - 기본 Setup"
description: 백엔드 장고 프레임워크 Setup 가이드
image: ''
tags: ['웹개발', '백엔드', 'Django']
---
> 장고 프레임워크를 사용하기 위한 기본적인 셋업을 정리.

### 장고 기본 Setup

#### virtualenv
- create virtual environment: `python -m venv venv`
- activate: `. venv/Scripts/activate`
    - then, install django w/ `pip install django`
    - careful w/ name!
- deactivate: 

#### requirements.txt
- 패키지 저장: `pip freeze > requirements.txt`
- 패키지 설치: `pip install -r requirements.txt`

#### gitignore

### split settings

### rest framework (?)

### api document

#### docker