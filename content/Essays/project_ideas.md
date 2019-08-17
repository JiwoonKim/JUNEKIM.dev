---
date: '2019-05-17'
title: "프로젝트 아이디어"
description: 
tags: ['에세이']
---
> 뭔가 만들어보고 싶은 애플리케이션 아이디어 메모장
- 프로젝트의 시작은 항상 해결하고 싶은 문제에서 시작된다.
- 해결하고 싶은 문제가 없는데 굳이 무언가를 만들 필요는 없다. :sunglasses:
- 궁금한 것만 공부하고, 궁금하지 않은 것은 잠시 미루자
- 궁금하거나 필요한 것만 만들고, 그렇지 않은 것은 만들지 말자

#### todo 앱 -> 백 로그로 확장하기
- 일단 기본적인 todo 앱 리스트 (task 추가, 삭제, 완료 체크 기능)
- 오늘의 우선순위 1,2,3위 체크하는 기능 추가 (체크하면 오늘의 must do 박스에 표시되게 -> 한눈에 보기 편하게!)
    - drag and drop UI로 편하게 사용할 수 있도록 구현?
- 완료 체크된 테스크는 따로 볼 수 있는 화면도 만들기 (분리?)
    - 완료된 테스크를 모두 지우기 기능 (어제의 것은 어제의 것, 이제 더 필요없으면 삭제할 수 있게; 날짜로 자동 삭제되는 기능은 음...내가 그 다음날 보고 싶을 수도 있으니까 수동이 좋을 듯...)
- 작은 storage에다가 저장하여 다음날에도 테스크 유지될 수 있게 하고 싶음 (so non-volatile)
- 웹 앱으로 구현할지, 데스크탑 앱으로 구현할지 고민 (electron 좀 궁금..써보고 싶다)

#### 눈 보호 앱
- 30분 타이머 (컴퓨터 사용) + 5분 타이머 (눈 쉬기; 멀리보기)
- 컴퓨터 사용 시간 총 더해서 기록 가능했으면 좋겠다
    - 타이머 pause 하고 reset하면 (30-남은 시간)을 총 시간에 더해서 계산하는 기능
- 데스크탑용 + 모바일용
- 눈 건강 관련 정보도 한데 모아 제공할 수 있으면 좋겠다

#### 말투 이슈 모음
내가 깃헙에 이슈를 등록하여 (문제, 해결방안)을 도출하는 것처럼
말투나 성격에서 바꾸고 싶은 것도 기록해두고 해결하려고 하면 어떨까?
그런 메모장같은 앱이 있으면 좋겠다 -> 모바일 앱?
ex. 친구랑 약속 잡는데, 친구가 '오는 거 안 힘들겠냐'고 물을때 어떻게 하면 이쁘게 대답할 수 있을까

#### 크앙크앙

#### 숙소 예약 더치페이
숙소 예약할 때, 대표가 결제하고 돈을 보내주는 방식은 좀 비효율적인듯
그냥 한 번에 1/n을 계산하여 각자가 어디에다가 결제해야 그 돈이 숙소예약에 보내지는 걸로
하는 시스템이 있으면 좋겠다

#### '우리는 모인다' (모의 인터뷰)
pramp같은 모의 인터뷰 사이트
근데 인터뷰어로서의 가이드라인이 더 확실했으면 좋겠다
솔직히 인터뷰어가 '힌트 줄까요'라고 하지는 않지 않는가...;;
확실한 힌트 가이드라인, 그리고 금지어, 여러가지 풀이방식이 있었으면 좋겠다.
그리고 화상 / 그냥 목소리만 하는 거 선택할 수 있으면 좋겠다

#### Mylife Roadmap
imposture syndrome을 방지하는 roadmap

#### 컴퓨터 점자 시스템
컴퓨터를 계속 보는 일을 하니까 굉장히 눈이 아픈 것 같다
눈으로 보지 않고 타자를 치거나, 화면을 읽는 다른 방법이 없을까?
점자 시스템을 쓸 수 있게 도입? or 점자 익히는 것도 러닝 커브가 있고 시간이 걸리니까 스크린 리더기를 사용?

#### color picker chrome extension

#### Web Developer Chatbot
web developer chatbot (guidance)
- compile data from other developers (make it easier to share experiences)

#### Interactive Learning Framework
- want to create an interactive learning framework
- like interview cake, where there is guidance (problem breakdowns, gotchas for bonuses)
- but make it as a framework so it can be applied to any field 
- any field can add a problem, make breakdowns, and so on 

#### 한국어 체크
- grammarly처럼 한국어문법/문장 등 체크해주는 extension??

#### Micellaneous
- 음악찾기 -> 등록 -> 음악따라 방향키 생성 -> motion capture -> 점수까지??

- topic backlog chrome extension?? 
    - [idea](https://medium.freecodecamp.org/how-to-prioritize-what-you-learn-by-creating-a-topic-backlog-30d6a2a2c798)

- broken robot character (burnout 상징)

- 로그인할 떄 다른 사이트 credentials 갖고 오는 것 조금 신경쓰임...
    - (ex. 유다시티 로그인할 때 구글 아이디 사용) 편리하긴 한데 그게 어쨋든 내것이 아니고 구글의 것이니까...
    - 개인정보까지는 아니더라도 id credentials을 만들어서 각자가 소유하게끔하는 방법은 없을까? 만약 만들면, 효용가치가 있을까??